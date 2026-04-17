/**
 * Callback 基礎實作
 * @param {number} num1 - 第一個數字
 * @param {number} num2 - 第二個數字
 * @param {function} action - 執行運算的 callback 函數
 */
function mathTool(num1, num2, action) {
  // 執行傳進來的 action 函數，並將兩個數字傳給它
  return action(num1, num2);
}

// 測試：傳入相加的匿名函數
const addResult = mathTool(10, 5, (a, b) => a + b);
console.log(addResult); // 輸出: 15

// 測試：傳入相減的匿名函數
const subtractResult = mathTool(10, 5, (a, b) => a - b);
console.log(subtractResult); // 輸出: 5