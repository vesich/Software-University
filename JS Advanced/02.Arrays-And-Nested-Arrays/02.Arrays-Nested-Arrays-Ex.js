// 01. Print an Array with a Given Delimiter //////////////////////////

function solve(input, delim) {
    console.log(input.join(delim));
}
solve(['How about no?',

    'I',

    'will',

    'not',

    'do',

    'it!'],

    '_')




// 02. Print Every N-th Element from an Array ////////////////////////////

function solve(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i])
    }
    return newArr;
}
solve(['dsa',

    'asd',

    'test',

    'tset'],

    2)




// 03. Add and Remove Elements //////////////////////////////////////////

function solve(input) {
    let myArr = [];
    let number = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'add') {
            myArr.push(number)
        } else if (input[i] == 'remove') {
            myArr.pop();
        }
        number++;
    }
    console.log(myArr.length != 0 ? myArr.join('\n') : 'Empty')
}

solve(['add',

    'add',

    'remove',

    'add',

    'add'])




// 04. Rotate Array ///////////////////////////////////////////////

function solve(input, num) {

    for (let i = 0; i < num; i++) {
        let temp = input.pop()
        input.unshift(temp)
    }
    console.log(input.join(" "));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)




// 05. Extract Increasing Subsequence from Array  /////////////////

function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= result[result.length - 1] || result.length == 0) {
            result.push(input[i])
        }
    }
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])




// 06. List Of Names /////////////////////////////////////////////////////////

function names(params) {
    params.sort((a, b) => a.localeCompare(b))

    for (let num in params) {
        console.log(`${Number(num) + 1}.${params[num]}`);
    }
}
names(["John", "Bob", "Christina", "Ema"])




// 07. Sorting Numbers ////////////////////////////////////////////////////////

function solve(input) {
    let newArr = [];
    input = input.sort((a, b) => a - b)
    while (input.length > 0) {
        newArr.push(input.shift())
        newArr.push(input.pop())
    }
    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))




// 08. Sort an Array by 2 Criteria ///////////////////////////////////////////////

function solve(input) {
    input
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .forEach(element => {
            console.log(element);
        })
}
solve(['Isacc',

    'Theodor',

    'Jack',

    'Harrison',

    'George'])




// 09. Magic Matrices ////////////////////////////////////////////////////////////

function solve(input) {
    let rowSum = [];
    let colSum = [];
    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        let sum = row.reduce((a, b) => (a + b), 0)
        rowSum.push(sum)
    }
    for (let i = 0; i < input.length; i++) {
        let newRow = []
        for (let y = 0; y < input.length; y++) {
            newRow.push(input[y][i])
        }
        let sum = newRow.reduce((a, b) => (a + b), 0)
        colSum.push(sum)
    }
    return rowSum.concat(colSum).every((el, i, arr) => el == arr[0])
}
console.log(solve([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]))
