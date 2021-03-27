//01. Sort Array ///////////////////////////////////////////////////

// function solve(arr, comm) {
//     const map = {
//         'asc': (a, b) => a - b,
//         'desc': (a, b) => b - a
//     }
//     return arr.sort(map[comm])
// }
// console.log(solve([14, 7, 17, 6, 8], 'asc'))



//02. Argument Info ///////////////////////////////////////////////

// function solve(...input) {

//     // function func(el) {
//     //     return `${typeof (this.el)} : ${this.el}`
//     // }
    
//     let result = [];
//     input.forEach(el => {
//         let obj = {}
//         obj[typeof el] = el
//         result.push(obj)

//     })


//     return result
// }

// console.log(solve({ name: 'bob' }, 3.333, 9.999))
//console.log(solve('cat', 42,'dog', function () { console.log('Hello world!'); }))




//// 03. Fibonacci /////////////////////

// function getFibonator() {
//     let num1 = 0;
//     let num2 = 1;

//     return function fib() {
//         let result = num1 + num2;
//         num1 = num2;
//         num2 = result;
//         return num1;
//     }  
// }
// let fib = getFibonator()
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13
// console.log(fib()); // 21



////05. Functional Sum ///////////////////////////

function add(a) {
    let sum = 0;
    sum += a;

    function inner(b) {
        sum += b;
        return inner
    }

    inner.toString = () => sum;
    return inner;
}
console.log("" + add(1))
console.log(add(1)(6)(-3).toString())


let a = add(1);
let b = a(2);
let c = b(3);
console.log(c.toString());

//// DECORATION