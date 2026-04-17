/**
 * 綜合應用：計算總價與折扣
 * @param {Array} cart - 商品價格陣列
 * @param {Function} discountFunc - 處理折扣的策略函數
 */
function calculateTotal(cart, discountFunc) {
    // 1. 使用 reduce 將陣列內的所有價格加總
    const sum = cart.reduce((acc, curr) => acc + curr, 0);
    
    // 2. 將總和傳入 discountFunc 處理並回傳結果
    return discountFunc(sum);
}

// 測試案例
const myCart = [100, 200, 300];

// 使用匿名函數作為 discountFunc，實作「扣除 50 元」的邏輯
const finalPrice = calculateTotal(myCart, (total) => total - 50);

console.log("最終總價為:", finalPrice); // 預期輸出: 550 (600 - 50)