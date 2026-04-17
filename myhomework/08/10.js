// 1. 定義 checkAdmin 函數
function checkAdmin(role, callback) {
    if (role !== "admin") {
        // [錯誤狀況] 第一個參數傳入錯誤訊息，第二個參數不傳 (或傳 undefined)
        // 使用 return 確保函數執行到此為止
        return callback("Access Denied");
    }

    // [成功狀況] 第一個參數傳入 null，代表沒有錯誤
    // 第二個參數傳入成功後的結果資料
    callback(null, "Welcome");
}

// 2. 測試：處理「錯誤」的狀況
checkAdmin("guest", (err, data) => {
    if (err) {
        console.log("驗證失敗：" + err); // 輸出：驗證失敗：Access Denied
        return; // 提早結束，不執行後續邏輯
    }
    console.log("成功訊息：" + data);
});

// 3. 測試：處理「成功」的狀況
checkAdmin("admin", (err, data) => {
    if (err) {
        console.log("驗證失敗：" + err);
        return;
    }
    console.log("驗證成功：" + data); // 輸出：驗證成功：Welcome
});