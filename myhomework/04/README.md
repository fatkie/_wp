## 習題4

## 摘要
---

# 📘 JavaScript 練習題（1～10）

---

## 🧩 題目 1：判斷成績等級（if）

**說明：**
輸入一個分數，判斷等級（A/B/C/D/F）

### ✅ 解答：

```javascript
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(getGrade(85)); // B
```

---

## 🧩 題目 2：1~100 加總（for）

**說明：**
用 for 迴圈算總和

### ✅ 解答：

```javascript
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum); // 5050
```

---

## 🧩 題目 3：猜數字（while）

**說明：**
模擬猜數字直到猜中

### ✅ 解答：

```javascript
let target = 7;
let guess = 0;

while (guess !== target) {
    guess++;
    console.log("猜：" + guess);
}

console.log("猜對了！");
```

---

## 🧩 題目 4：陣列找最大值（array + for）

**說明：**
找出陣列最大值

### ✅ 解答：

```javascript
let arr = [5, 12, 8, 20, 3];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max); // 20
```

---

## 🧩 題目 5：物件資料處理（object）

**說明：**
建立一個學生物件並輸出

### ✅ 解答：

```javascript
let student = {
    name: "Tom",
    age: 18,
    score: 90
};

console.log(student.name);
console.log(student.score);
```

---

## 🧩 題目 6：JSON 轉換

**說明：**
物件轉 JSON，再轉回來

### ✅ 解答：

```javascript
let obj = { name: "Amy", age: 20 };

// 轉 JSON
let jsonStr = JSON.stringify(obj);
console.log(jsonStr);

// 轉回物件
let newObj = JSON.parse(jsonStr);
console.log(newObj.name);
```

---

## 🧩 題目 7：計算偶數個數（for + if）

**說明：**
找出陣列中有幾個偶數

### ✅ 解答：

```javascript
let nums = [1, 2, 3, 4, 5, 6];
let count = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        count++;
    }
}

console.log(count); // 3
```

---

## 🧩 題目 8：函式計算平方（function）

**說明：**
寫一個函式回傳平方

### ✅ 解答：

```javascript
function square(n) {
    return n * n;
}

console.log(square(5)); // 25
```

---

## 🧩 題目 9：反轉陣列（array + while）

**說明：**
用 while 反轉陣列

### ✅ 解答：

```javascript
let arr = [1, 2, 3, 4];
let reversed = [];

let i = arr.length - 1;

while (i >= 0) {
    reversed.push(arr[i]);
    i--;
}

console.log(reversed); // [4,3,2,1]
```

---

## 🧩 題目 10：多學生平均（object + array）

**說明：**
計算學生平均分數

### ✅ 解答：

```javascript
let students = [
    { name: "A", score: 80 },
    { name: "B", score: 90 },
    { name: "C", score: 70 }
];

let total = 0;

for (let i = 0; i < students.length; i++) {
    total += students[i].score;
}

let avg = total / students.length;

console.log(avg); // 80
```

---

# 📌 小總結

這 10 題已經完整包含你要求的：

✔ if
✔ for
✔ while
✔ function
✔ array
✔ object
✔ JSON

---

如果你下一步要做老師要求的版本，我可以幫你再加一個 👉 README.md（Markdown 格式）或改成「作業可交版本」。
