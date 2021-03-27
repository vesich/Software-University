//// Practise ///////////////////////////////////

// class MyClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`${this.name} says Hi!`);
//     }
// }


// const myLiteral = {
//     name: 'Peter',
//     sayHi() {
//         console.log(`${this.name} says Hi!`);
//     }
// }
// const myInstance = new MyClass('Ivan');
// const newInstance = new MyClass('John')

// // console.log(JSON.stringify(myInstance) == JSON.stringify(myLiteral))
// console.log(myInstance);
// console.log(myLiteral);
// console.log(newInstance);

// myInstance.sayHi()

// const myFunc = myInstance.sayHi.bind(myLiteral);

// myFunc()




// Конвенция при създаване на клас е да се създаде в нов файл /файла започва с главна буква/
// отделен файл за клас


//// 01. Person ///////////////////////////////////////

// class Person {
//     constructor(firstName, lastName, age, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }
//     toString() {
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

//     }
// }

// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'); 

// console.log(person.toString()); 
// console.log(`${person}`);
// console.log('' + person);




////04. Point Distance  ///////////////////////////////////

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y
//     }
//     static distance(a, b) {
//         if (a instanceof Point == false || b instanceof Point == false) {
//             throw new TypeError('Parameter must be a type Point')
//         }
//         return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
//     }
// }

// const p1 = new Point(0,0);
// const p2 = new Point(4,3);

// console.log(p1, p2);
// console.log(Point.distance(p1, p2))








// class Circle {
//     constructor(r) {
//         this.r = r;
//     }

//     get diameter() {
//         return this.r * 2
//     }

//     set diameter(value) {
//         if (typeof value != 'number') {
//             throw new TypeError('Diameter must be a type of number')
//         }
//         this.r = value / 2;
//     }

// }

// const myCircle = new Circle(4);

// console.log(myCircle.r);


// console.log(myCircle.diameter);

// myCircle.diameter = 'asdas';

// console.log(myCircle.r);



class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        if (typeof value != 'number') {
            throw new TypeError('x-coordinate must be a number')
        }
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        if (typeof value != 'number') {
            throw new TypeError('y-coordinate must be a number')
        }
        this._y = value;
    }
}

