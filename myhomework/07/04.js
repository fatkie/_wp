function cleanData(arr) {
    // 移除最後一個元素
    arr.pop();
    // 在最前面加上 "Start"
    arr.unshift("Start");
}

let myData = [1, 2, 3];

// 執行函數
cleanData(myData);

// 觀察結果
console.log(myData); // ["Start", 1, 2]