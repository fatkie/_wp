const express = require('express');
const session = require('express-session');
const initSqlJs = require('sql.js');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const app = express();
const DB_PATH = path.join(__dirname, 'blog.db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'blog-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

let db;

async function initDb() {
  console.log('Initializing database...');
  const SQL = await initSqlJs();
  console.log('SQL.js loaded');
  let data = null;
  if (fs.existsSync(DB_PATH)) {
    data = fs.readFileSync(DB_PATH);
    console.log('Loaded existing database');
  } else {
    console.log('Creating new database');
  }
  db = new SQL.Database(data);
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      user_id INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
  saveDb();
  console.log('Database initialized');
}

function saveDb() {
  if (db) {
    const data = db.export();
    fs.writeFileSync(DB_PATH, Buffer.from(data));
  }
}

function getPosts() {
  const stmt = db.prepare('SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC');
  const posts = [];
  while (stmt.step()) {
    posts.push(stmt.getAsObject());
  }
  stmt.free();
  return posts;
}

function getPost(id) {
  const stmt = db.prepare('SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = ?');
  stmt.bind([id]);
  let post = null;
  if (stmt.step()) {
    post = stmt.getAsObject();
  }
  stmt.free();
  return post;
}

function getUserByUsername(username) {
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
  stmt.bind([username]);
  let user = null;
  if (stmt.step()) {
    user = stmt.getAsObject();
  }
  stmt.free();
  return user;
}

function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  next();
}

app.get('/', (req, res) => {
  const posts = getPosts();
  res.render('index', { posts });
});

app.get('/post/:id', (req, res) => {
  const post = getPost(req.params.id);
  if (!post) return res.status(404).send('Post not found');
  res.render('post', { post });
});

app.get('/new', requireAuth, (req, res) => {
  res.render('new');
});

app.post('/posts', requireAuth, (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).send('Title and content required');
  
  db.run('INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)', [title, content, req.session.user.id]);
  saveDb();
  res.redirect('/');
});

app.get('/delete/:id', requireAuth, (req, res) => {
  db.run('DELETE FROM posts WHERE id = ? AND user_id = ?', [req.params.id, req.session.user.id]);
  saveDb();
  res.redirect('/');
});

app.get('/register', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Username and password required');
  
  const existing = getUserByUsername(username);
  if (existing) return res.status(400).send('Username already exists');
  
  const hashedPassword = await bcrypt.hash(password, 10);
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
  saveDb();
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Username and password required');
  
  const user = getUserByUsername(username);
  if (!user) return res.status(400).send('Invalid credentials');
  
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).send('Invalid credentials');
  
  req.session.user = { id: user.id, username: user.username };
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

initDb().then(() => {
  const PORT = 3004;
  const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Blog running at http://localhost:${PORT}`);
  });
  server.on('error', (err) => {
    console.error('Server error:', err);
  });
}).catch(err => {
  console.error('Init DB error:', err);
});
