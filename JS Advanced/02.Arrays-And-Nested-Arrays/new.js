//01

// function solve(params, delim) {
//     return params.join(delim)
// } 
// console.log(solve(['One',  

// 'Two',  

// 'Three',  

// 'Four',  

// 'Five'],  

// '-'))



//02 

// function solve(arr, step) {
//     let output = [];
//     for (let i = 0; i < arr.length; i += step) {
//         output.push(arr[i]);
//     }
//     return output;

// }
// console.log(solve(['5',

//     '20',

//     '31',

//     '4',

//     '20'],

//     2))



// 03. 

// function solve(commands) {

//     let myArr = []
//     let myNum = 1;

//     for (let i = 0; i < commands.length; i++) {
//         if (commands[i] == 'add') {

//             myArr.push(myNum);
//         } else {

//             myArr.pop()
//         }
//         myNum++
//     }
//     console.log(myArr);

// }
// solve(['add',

//     'add',

//     'add',

//     'add'])

// solve(['add',

//     'add',

//     'remove',

//     'add',

//     'add'])



// 05

// function solve(input) {
//     let result = [];

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] >= result[result.length - 1] || result.length == 0) {
//             result.push(input[i])
//         }
//     }
//     return result;

// }
// solve([1,

//     3,

//     8,

//     4,

//     10,

//     12,

//     3,

//     2,

//     24])



//06

// function solve(list) {
//     list.sort((a,b) => a.localeCompare(b)).forEach((name, ind) => {
//         console.log(ind+1 + "." + name);
//     }) 
// }
// solve(["John", "Bob", "Christina", "Ema"] )



//07 

// function solve(input) {
//     input.sort((a, b) => a - b)
//     let newInput = [];
//     while(input.length > 0) {
//         newInput.push(input.shift());
//         newInput.push(input.pop())
//     }
//     console.log(newInput);
// }
// solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])



//08

// function solve(input) {
//     input
//         .sort((a, b) => a.length - b.length || (a.toLowerCase()).localeCompare(b.toLowerCase()))
//         .forEach(one => {
//             console.log(one);
//         })
// }
// solve(['Isacc',

//     'Theodor',

//     'Jack',

//     'Harrison',

//     'George'])



//09.

// function solve(matrix) {

//     let cols = [];
//     let rows = [];
//     for (let i = 0; i < matrix.length; i++) {
//         rows.push(matrix[i].reduce((a, c) => (a + c), 0))
//     }
//     for (let i = 0; i < matrix.length; i++) {
//         let newRow = [];
//         for (let y = 0; y < matrix.length; y++) {
//             newRow.push(matrix[y][i])
//         }
//         let sum = newRow.reduce((a, b) => (a + b), 0)
//         cols.push(sum)
//     }
//     return cols.concat(rows).every((el, i, arr) => el == arr[0])


// }
// console.log(solve([[4, 5, 6],

// [6, 5, 4],

// [5, 5, 5]]))



function solve(moves) {
   
    let dashboard = [[false, false, false], 

                    [false, false, false], 
    
                    [false, false, false]]

    

}
solve(["0 1", 

"0 0", 

"0 2",  

"2 0", 

"1 0", 

"1 1", 

"1 2", 

"2 2", 

"2 1", 

"0 0"] )