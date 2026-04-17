const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

// 使用 filter 篩選出成年人
const adults = users.filter(user => user.age >= 18);

console.log(adults);
// 預期輸出: [{name: "Alice", age: 25}, {name: "Charlie", age: 30}]