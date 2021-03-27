// const myObj = {
//     name: "Peter",
//     age: 21
// };

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

// myObj.name = 'John';


// Object.defineProperty(myObj, 'lastName', {
//     value: "Wright",
//     writable: true,
//     enumerable: false,
//     configurable: true

// });

// console.log(myObj);

// for (let key in myObj) {
//     console.log(key);
// }

// const myCollection = {};

// Object.defineProperty(myCollection, 'size', {
//     enumerable: false,
//     get: function () {
//         return Object.keys(this).length;
//     }
// })

// myCollection['John'] = '+1-443-972-0604';
// myCollection['Ves'] = '+1-443-431-0308';
// myCollection['May'] = '+1-207-521-8564';

// console.log(myCollection.size);

// for (let key in myCollection) {
//     console.log(key, myCollection[key]);
// }

// console.log(myCollection);




//// 01.Person ////////////////////////////////////////

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(" ");
//     }
// }


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     Object.defineProperty(this, 'fullName', {
//         enumerable: true,
//         get: function () {
//             return `${this.firstName} ${this.lastName}`
//         },
//         set: function (value) {
//             [this.firstName, this.lastName] = value.split(" ");
//         }
//     })
// }

// const myPerson = new Person('May', 'Sue');

// console.log(myPerson.fullName);

// myPerson.lastName = 'Johnson';

// console.log(myPerson.fullName);

// myPerson.fullName = 'Mary Sue';

// console.log(myPerson.firstName);
// console.log(myPerson.lastName);
// console.log(myPerson.fullName);








function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
