// function solve(arr, criteria) {

//     function splitLine(line) { return line.split('|') }

//     function convertToTicket([destination, price, status]) {
//         return new Ticket(destination, Number(price), status)
//     }

//     class Ticket {
//         constructor(destination, price, status) {
//             this.destination = destination;
//             this.price = price;
//             this.status = status
//         }
//     }

//     const sortMapper = {
//         'destination': (a, b) => a.destination.localeCompare(b.destination),
//         'price': (a, b) => a.price - b.price,
//         'status': (a, b) => a.status.localeCompare(b.status)
//     }

//     return arr
//         .map(splitLine)
//         .map(convertToTicket)
//         .sort(sortMapper[criteria])

// }
// console.log(solve(['Philadelphia|94.20|available',

//     'New York City|95.99|available',

//     'New York City|95.99|sold',

//     'Boston|126.20|departed'],

//     'destination'))




////05. Length Limit

// class Stringer {
//     constructor(string, length) {
//         this.innerString = string;
//         this.innerLength = length;
//     }

//     increase(length) {
//         this.innerLength += length;
//     }

//     decrease(length) {
//         this.innerLength -= length;
//         if (this.innerLength < 0) {
//             this.innerLength = 0
//         }
//     }

//     toString() {
//         // return this.innerLength === 0 ? '...' : this.innerString.slice(0, this.innerLength) + '...'
//         if (this.innerLength == 0) {
//             return '...'
//         } else if (this.innerString.slice(0, this.innerLength).length == this.innerString.length) {
//             return this.innerString;
//         } else {
//             return this.innerString.slice(0, this.innerLength) + '...';
//         }
//     }
// }

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test 

// test.decrease(3);
// console.log(test.toString()); // Te... 

// test.decrease(5);
// console.log(test.toString()); // ... 

// test.increase(4);
// console.log(test.toString()); // Test 




////07. HEX //////////////////////

// class Hex {
//     constructor(value) {
//         this.value = value;
//     }
//     valueOf() {
//         return this.value
//     }

//     plus(number) {
//         return new Hex(this.value + number)
//     }

//     minus(number) {
//         return new Hex(this.value - number)
//     }

//     toString() {
//         return '0x' + this.value.toString(16).toUpperCase()
//     }

//     parse(string) {
//         return string.slice(2).toString(10)
//     }
// }

// let FF = new Hex(255);

// console.log(FF.toString());

// FF.valueOf() + 1 == 256;

// let a = new Hex(10);

// let b = new Hex(5);

// console.log(a.plus(b).toString());

// console.log(a.plus(b).toString() === '0xF');



//// 09.Auto-Engineering Company ////////////////////////////////////////

// function solve(input) {

//     let result = input
//         .map((line) => line.split(" | "))
//         .reduce((storage, cars) => {
//             let [make, model, quantity] = cars
//             if (!storage[make]) {
//                 storage[make] = {};
//             }
//             if (!storage[make][model]) {
//                 storage[make][model] = 0;
//             }

//             storage[make][model] += Number(quantity)
//             return storage
//         }, {})
//     for (let [key, value] of Object.entries(result)) {
//         console.log(key);
//         for (let kvp of Object.entries(value)) {
//             console.log(`###${kvp[0]} -> ${kvp[1]}`);
//         }
//     }
// }
// console.log(solve(['Audi | Q7 | 1000',

//     'Audi | Q6 | 100',

//     'BMW | X5 | 1000',

//     'BMW | X6 | 100',

//     'Citroen | C4 | 123',

//     'Volga | GAZ-24 | 1000000',

//     'Lada | Niva | 1000000',

//     'Lada | Jigula | 1000000',

//     'Citroen | C4 | 22',

//     'Citroen | C5 | 10']))