/**
 * 手寫篩選器函數
 * @param {Array} arr - 原始陣列
 * @param {Function} callback - 用來判斷條件的函數
 */
function myFilter(arr, callback) {
    const result = []; // 建立一個新陣列，保持原陣列不可變
    
    for (let i = 0; i < arr.length; i++) {
        // 執行 callback，並傳入目前的元素
        // 如果 callback 回傳為 true，則推入結果陣列
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// 測試：篩選出大於 7 的數字
const numbers = [1, 5, 8, 12];
const filteredNumbers = myFilter(numbers, item => item > 7);

console.log(filteredNumbers); // 預期輸出: [8, 12]