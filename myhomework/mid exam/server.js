// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 暫存資料 (因為沒有真實資料庫，伺服器重開會清空)
let users = []; // 存放 { username, password }
let scores = []; // 存放 { username, songName, score, date }

// 註冊 API
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ success: false, message: '帳號已被註冊！' });
    }
    users.push({ username, password });
    res.json({ success: true, message: '註冊成功！' });
});

// 登入 API
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: '登入成功！' });
    } else {
        res.status(401).json({ success: false, message: '帳號或密碼錯誤！' });
    }
});

// 上傳新分數 API
app.post('/api/score', (req, res) => {
    const { username, songName, score } = req.body;
    if (username && typeof score === 'number') {
        const date = new Date().toLocaleString('zh-TW');
        scores.push({ username, songName, score, date });
        res.json({ success: true, message: '分數已儲存！' });
    } else {
        res.status(400).json({ success: false, message: '資料格式錯誤' });
    }
});

// 取得公開排行榜 (只取前 10 名)
app.get('/api/leaderboard', (req, res) => {
    const sortedBoard = [...scores].sort((a, b) => b.score - a.score);
    res.json(sortedBoard.slice(0, 10));
});

// 取得個人歷史紀錄 API
app.get('/api/history/:username', (req, res) => {
    const username = req.params.username;
    // 找出該玩家的所有紀錄，並由新到舊排序
    const userHistory = scores.filter(s => s.username === username).reverse();
    res.json(userHistory);
});

app.listen(port, () => {
    console.log(`✅ 伺服器成功運行於 http://localhost:${port}`);
});