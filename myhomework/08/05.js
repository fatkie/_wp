// 1. 定義 fetchData 函數
function fetchData(id, callback) {
    // 建立模擬資料物件
    const fakeData = { 
        id: id, 
        status: "success" 
    };

    // 依照 Node.js 慣例呼叫 callback：
    // 第一個參數是錯誤物件 (此處沒錯誤，傳入 null)
    // 第二個參數是實際的資料物件
    callback(null, fakeData);
}

// 2. 執行 fetchData 並處理回傳的結果
fetchData(101, (err, data) => {
    // 習慣上會先處理錯誤 (Error-First)
    if (err) {
        console.log("發生錯誤：" + err);
        return; // 發生錯誤就中斷，不執行後面的程式碼
    } 
    
    // 如果沒有錯誤，才處理資料
    console.log("成功取得資料：", data); 
    // 預期輸出：成功取得資料： { id: 101, status: 'success' }
});