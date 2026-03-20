## 習題4

## 摘要
好，這次我直接幫你整理完整 **10 題（每題都有：題目 + 程式碼 + 測試結果）**，而且會涵蓋你要求的所有重點：
✔ if / for / while / function / array / object / JSON
✔ 每題都有測試結果

---

# ✅ 第 1 題：判斷成績等第（if + function）

## 題目

輸入分數，回傳等第。

## 程式碼

```javascript
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

console.log(getGrade(85));
```

## 測試結果

```
B
```

---

# ✅ 第 2 題：計算陣列總和（array + for）

## 題目

用 for 迴圈計算陣列總和。

## 程式碼

```javascript
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
```

## 測試結果

```
15
```

---

# ✅ 第 3 題：找最大值（array + for + if）

## 題目

找出陣列最大值。

## 程式碼

```javascript
function maxNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxNumber([3, 9, 2, 7]));
```

## 測試結果

```
9
```

---

# ✅ 第 4 題：while 倒數計時（while）

## 題目

用 while 印出 5 到 1。

## 程式碼

```javascript
let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}
```

## 測試結果

```
5
4
3
2
1
```

---

# ✅ 第 5 題：判斷偶數（if）

## 題目

判斷數字是否為偶數。

## 程式碼

```javascript
function isEven(num) {
    if (num % 2 === 0) return true;
    else return false;
}

console.log(isEven(4));
```

## 測試結果

```
true
```

---

# ✅ 第 6 題：物件操作（object）

## 題目

建立一個學生物件並印出姓名。

## 程式碼

```javascript
let student = {
    name: "小明",
    age: 18,
    score: 90
};

console.log(student.name);
```

## 測試結果

```
小明
```

---

# ✅ 第 7 題：JSON 轉換（JSON）

## 題目

將物件轉成 JSON 字串。

## 程式碼

```javascript
let obj = {
    name: "小華",
    age: 20
};

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);
```

## 測試結果

```
{"name":"小華","age":20}
```

---

# ✅ 第 8 題：JSON 解析（JSON）

## 題目

把 JSON 字串轉回物件。

## 程式碼

```javascript
let jsonStr = '{"name":"小美","age":22}';
let obj = JSON.parse(jsonStr);

console.log(obj.name);
```

## 測試結果

```
小美
```

---

# ✅ 第 9 題：計算階乘（function + while）

## 題目

用 while 計算 n!。

## 程式碼

```javascript
function factorial(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(5));
```

## 測試結果

```
120
```

---

# ✅ 第 10 題：統計陣列偶數數量（array + for + if）

## 題目

算出陣列中有幾個偶數。

## 程式碼

```javascript
function countEven(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEven([1, 2, 3, 4, 6]));
```

## 測試結果

```
3
```

---

# 📌 下一步（很重要）

你作業還有一個要求👇
👉 要寫 `README.md（Markdown）`

如果你要，我可以幫你直接做一份 **可交作業用 README.md（超加分版）** 😎
