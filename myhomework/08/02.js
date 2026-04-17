const req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } };

// 從 req.body 中直接提取屬性
const { title, content } = req.body;

console.log(title, content); // "JS教學", "內容在此"