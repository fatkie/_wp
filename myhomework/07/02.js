(function() {
    const count = 100;
    console.log("Count is: " + count);
})();

// 測試：嘗試在外部存取 count
try {
    console.log(count);
} catch (e) {
    console.log("外部無法存取 count: " + e.message);
}