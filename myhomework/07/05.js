// 定義高階函數
const multiplier = (factor) => (n) => n * factor;

// 範例用法
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10)); // 輸出: 20
console.log(triple(10)); // 輸出: 30