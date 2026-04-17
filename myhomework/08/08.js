let user = "Guest";

// 使用三元運算子 (Ternary Operator) 進行邏輯判斷
const welcomeMsg = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;

console.log(welcomeMsg); // "<h1>Welcome, Guest</h1>"