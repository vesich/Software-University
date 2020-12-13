// 01. Person Info

// function solve(firstName, lastName, age) {

// let person = {
//     firstName,
//     lastName,
//     age
// }
// return person
// }
// console.log(solve("Peter",  
// "Pan", 
// "20"))



// 02. City  //////////////////////////////////////////////////////////

// function solve(obj) {
//     for (let key in obj) {
//         console.log(`${key} -> ${obj[key]}`);
//     }
// }
// solve({
//     name: "Sofia",

//     area: 492,

//     population: 1238438,

//     country: "Bulgaria",

//     postCode: "1000"
// })



// 03. Convert to Object  //////////////////////////////////////////////////

// function solve(json) {
//     json = JSON.parse(json);
//     for (let key in json) {
//         console.log(`${key}: ${json[key]}`);
//     }
// }
// solve('{"name": "George", "age": 40, "town": "Sofia"}')



// 04. Convert to JSON ////////////////////////////////////////////////////////

// function solve(name, lastName, hairColor) {
//     let person = {
//         name, 
//         lastName,
//         hairColor
//     }
//     person = JSON.stringify(person)
//     console.log(person);

// }
// solve('George', 'Jones', 'Brown')




// 05. Cats  //////////////////////////////////////////////////////////////////////

// function solve(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = Number(age);
//             this.meow = () => {
//                 console.log(`${this.name}, age ${this.age} says Meow`);
//             }
//         }
//     }
//     for (let line of input) {
//         let [name, age] = line.split(" ");
//         let cat = new Cat(name, age)
//         cat.meow()
//     }
// }
// solve(['Mellow 2', 'Tom 5']);



// 06. Songs /////////////////////////////////////////////////////////////////////////

// function solve(input) {
//     let numberOfSongs = Number(input.shift());
//     let typeList = input.pop();

//     class Songs {
//         constructor(type, name, time) {
//             this.type = type;
//             this.name = name;
//             this.time = time;
//         }
//     }
//     let list = [];

//     for (let i = 0; i < numberOfSongs; i++) {
//         let [type, name, time] = input[i].split("_");
//         if (type == typeList || typeList == "all") {
//             let song = new Songs(type, name, time)
//             list.push(song)
//             console.log(song.name);
//         }
//     }
// }
// solve([3, 

//     'favourite_DownTown_3:14', 

//     'favourite_Kiss_4:16', 

//     'favourite_Smooth Criminal_4:01', 

//     'favourite'])





///////////////////////////////////////////////////////////////////

