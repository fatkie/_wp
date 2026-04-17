let listA = [1, 2];
let listB = [3, 4];

function process(a, b) {
  // 1. 修改內容 (Mutation)
  // a 與 listA 指向同一個記憶體位址，所以外部會受影響
  a.push(99);

  // 2. 重新賦值 (Re-assignment)
  // 建立了一個新的陣列位址並交給區域變數 b
  // 這會切斷 b 與外部 listB 的連結，因此 listB 不受影響
  b = [100];
}

process(listA, listB);

// 驗證結果
console.log("listA:", listA); // 預期輸出: [1, 2, 99]
console.log("listB:", listB); // 預期輸出: [3, 4]