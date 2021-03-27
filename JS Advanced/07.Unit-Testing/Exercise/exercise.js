//01. Request Validator //////////////////////////////////////

// function solve(object) {

//     if (object.method === undefined || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(object.method)) {
//         throw new Error(`Invalid request header: Invalid Method`);
//     }

//     if (object.uri === undefined || !(/^([a-zA-Z0-9\.]+|\*)$/gm).test(object.uri)) {
//         throw new Error(`Invalid request header: Invalid URI`);
//     }

//     if (object.version === undefined || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(object.version)) {
//         throw new Error(`Invalid request header: Invalid Version`);
//     }



//     if (object.message === undefined || !(/^[^<>\\&'"]*$/gm.test(object.message))) {
//         throw new Error(`Invalid request header: Invalid Message`);
//     }

//     return object;
// }

// console.log(solve({ 

//     method: 'GET', 
  
//     uri: 'svn.public.catalog', 
  
//     version: 'HTTP/1.1', 
  
//     message: '' 
  
//   } ))




//// 02. Even or Odd ///////////////////////////////////////////

// const describe = require('mocha').describe;
// const assert = require('chai').assert;

// function isOddOrEven(string) {
//     if (typeof (string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }

// describe('check isOddOrEven', () => {

//     it('Type is string', () => {
//         assert.isUndefined(isOddOrEven(1), 'Message a==a')
//     })

//     it('Is even', () => {
//         assert.equal(isOddOrEven('aa'), 'even','Message a==a')
//     })

//     it('Is odd', () => {
//         assert.equal(isOddOrEven('a'), 'odd','Message a==a')
//     })
// })



//// 03. Char Lookup //////////////////////////////////////

// const describe = require('mocha').describe;
// const assert = require('chai').assert;


// function lookupChar(string, index) {
//     if (typeof (string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }

// describe('charLookup', () => {

//     it('If 1', () => {
//         assert.isUndefined(lookupChar(1, 1))
//         assert.isUndefined(lookupChar('abc', 1.2))
//         assert.isUndefined(lookupChar('abc', 'a'))
//     })

//     it('If 2', () => {
//         assert.equal(lookupChar('vchera', 12), 'Incorrect index')
//         assert.equal(lookupChar('vchera', -1), 'Incorrect index')

//     })

//     it('working case', () => {
//         assert.equal(lookupChar('vchera', 4), 'r')
//     })
// })




//// 04. Math Enforcer ///////////////////////////////////////////////

// const describe = require('mocha').describe;
// const assert = require('chai').assert;

// let mathEnforcer = { 
//     addFive: function (num) { 
//         if (typeof(num) !== 'number') { 
//             return undefined; 
//         } 
//         return num + 5; 
//     }, 
//     subtractTen: function (num) { 
//         if (typeof(num) !== 'number') { 
//             return undefined; 
//         } 
//         return num - 10; 
//     }, 
//     sum: function (num1, num2) { 
//         if (typeof(num1) !== 'number' || typeof(num2) !== 'number') { 
//             return undefined; 
//         } 
//         return num1 + num2; 
//     } 
// }; 

// describe('mathEnforcer', () => {

//     describe('add', () => {
//         it('is not a number', () => {
//             assert.isUndefined(mathEnforcer.addFive('a'));
//             assert.isUndefined(mathEnforcer.addFive(undefined));
//             //  assert.isNaN(mathEnforcer.addFive(NaN));
//         })

//         it('adding properly', () => {
//             assert.equal(mathEnforcer.addFive(0), 5);
//             assert.equal(mathEnforcer.addFive(-5), 0);
//             assert.equal(mathEnforcer.addFive(1.2), 6.2);
//             assert.equal(mathEnforcer.addFive(1), 6);
//         })
//     })

//     describe('subtract', () => {
//         it('is not a number', () => {
//             assert.isUndefined(mathEnforcer.subtractTen('a'));
//             assert.isUndefined(mathEnforcer.subtractTen(undefined));
//         });

//         it('subtracting properly', () => {
//             assert.equal(mathEnforcer.subtractTen(0), -10);
//             assert.equal(mathEnforcer.subtractTen(-5), -15);
//             assert.equal(mathEnforcer.subtractTen(1.2), -8.8);
//             assert.equal(mathEnforcer.subtractTen(1), -9);
//         })
//     })

//     describe('sum', () => {
//         it('undefined', () => {
//             assert.isUndefined(mathEnforcer.sum('1', 1));
//             assert.isUndefined(mathEnforcer.sum(1, '1'));
//         })

//         it('works', () => {
//             assert.equal(mathEnforcer.sum(1, 1), 2);
//             assert.equal(mathEnforcer.sum(1, -1), 0);
//             assert.equal(mathEnforcer.sum(1, 0), 1);
//             assert.equal(mathEnforcer.sum(-1, -1), -2);
//             assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5);
//             assert.equal(mathEnforcer.sum(1.3, -1.2), 0.10000000000000009);

//         })
//     })
// })




////05. Notification


const describe = require('mocha').describe;
const assert = require('chai').assert;

function solve(str) {
    return str + " ne znam chovek"
} 

describe('asdsa', () => {
    it('sdf', () => {
        assert.equal(solve('kak taka ve'), 'kak taka ve ne znam chovek')
    })
})