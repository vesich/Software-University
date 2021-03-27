////04. Sum of Numbers //////////////////////

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
} 

module.exports = sum;