function checkPass(score) {
    if (score >= 60) {
        return "及格";
    } else {
        return "不及格";
    }
}

console.log(checkPass(75)); // 及格
console.log(checkPass(50)); // 不及格