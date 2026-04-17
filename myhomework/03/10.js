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