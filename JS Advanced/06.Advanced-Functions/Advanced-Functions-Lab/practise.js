//01



// function solve(area, vol, input) {
//     const result = [];
//     input = JSON.parse(input);


//     for (let line of input) {
//         result.push({
//             area: area.call(line),
//             volume: vol.call(line)
//         })

//     }


//     return result;

// }

// console.log(solve(area, vol, `[ 

//     {"x":"1","y":"2","z":"10"}, 

//     {"x":"7","y":"7","z":"10"}, 

//     {"x":"5","y":"2","z":"10"} 

//     ]` ))

// function area() {

//     return Math.abs(this.x * this.y);

// };

// function vol() {

//     return Math.abs(this.x * this.y * this.z);

// };




//02

// function solution(num) {
//     let sum = num
//     function inner(a) {
//         return a + sum;
//     }

//     return inner;
// }

// let add5 = solution(5); 

// console.log(add5(2)); 

// console.log(add5(3)); 

// let add7 = solution(7); 

// console.log(add7(2)); 

// console.log(add7(3)); 




// 03

// function currencyFormatter(separator, symbol, symbolFirst, value) { 

//     let result = Math.trunc(value) + separator; 

//     result += value.toFixed(2).substr(-2,2); 

//     if (symbolFirst) return symbol + ' ' + result; 

//     else return result + ' ' + symbol; 

// } 

// function createFormatter(separator, symbol, symbolFirst, value) {

// }




// let dollarFormatter = createFormatter(',', '$', true, currencyFormatter); 

// console.log(dollarFormatter(5345));   // $ 5345,00 

// console.log(dollarFormatter(3.1429)); // $ 3,14 

// console.log(dollarFormatter(2.709));  // $ 2,71 





//05 Command Processor

// function solution() {
//     let result = '';

//     function append(string) {
//         result +=string;
//     }

//     function removeStart(n) {
//         result = result.slice(n);

//     }

//     function removeEnd(n) {
//         result = result.slice(0, -n);

//     }
//     function print() {
//         console.log(result);
//     }

//     return {
//         append,
//         removeStart,
//         removeEnd,
//         print
//     }
// }

// let firstZeroTest = solution();



// firstZeroTest.append('hello');

// firstZeroTest.append('again');

// firstZeroTest.removeStart(3);

// firstZeroTest.removeEnd(4);
// firstZeroTest.print()


// let secondZeroTest = solution(); 



// secondZeroTest.append('123'); 

// secondZeroTest.append('45'); 

// secondZeroTest.removeStart(2); 

// secondZeroTest.removeEnd(1); 

// secondZeroTest.print(); 




//06

// function processor() {
//     let collection = []
//     let obj = {
//         add: (string) => collection.push(string),
//         remove: (string) => {
//             while (collection.includes(string)) {
//                 let ind = collection.indexOf(string)
//                 collection.splice(ind, 1);
//             }
//         },
//         print: () => console.log(collection.join(",")),
//     }

//     return obj;
// }

// let func = processor();


// function solve(input) {
//  for (let line of input) {
//      let [comm, str] = line.split(" ")
//      func[comm](str)
//  }
// }




// solve(['add pesho', 'add george', 'add peter', 'remove peter','print'] )




//07

function outer(input) {


    function inner() {
      
        
return

    }





    input.forEach(line => {

    })

}

outer(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2'])