const post = {
  id: 1,
  title: "Hello World",
  content: "Markdown content"
};

// 1. 點符號 (Dot notation) - 最常用，語法簡潔
console.log(post.title);

// 2. 中括號 (Bracket notation) - 當屬性名是變數或包含特殊字元時必用
console.log(post["title"]);