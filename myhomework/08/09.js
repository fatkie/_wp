const contentArray = ["Very long content here..."];

// 取出陣列第一個字串，並截取前 10 碼
const preview = contentArray[0].substring(0, 10) + "...";

console.log(preview); // "Very long ..."