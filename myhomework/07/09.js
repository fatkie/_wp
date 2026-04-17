const tasks = ["Task", "Completed"];

// 使用 setTimeout 設定 2000 毫秒（2秒）後執行
setTimeout(() => {
    // 使用 join 方法將陣列組合成字串，並以空白分隔
    console.log(tasks.join(" "));
}, 2000);