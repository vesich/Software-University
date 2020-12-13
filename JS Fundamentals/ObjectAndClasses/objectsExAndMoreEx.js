// 01. Employees

// function solve(input) {
//     let list = {};
//     for (let line of input) {
//         list[line] = line.length
//     }
//     for (let key in list) {
//         console.log(`Name: ${key} -- Personal Number: ${list[key]}`);
//     }
// }
// solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])





// 02. Towns  /////////////////////////////////////////////////

// function solve(input) {

//     for (let line of input) {
//         let [town, latitude, longitude] = line.split(" | ");

//         let object = {
//             town,
//             latitude : Number(latitude).toFixed(2),
//             longitude:  Number(longitude).toFixed(2)
//         }
//         console.log(object);
//     }

// }
// solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])




// 03. Store Provision  ///////////////////////////////////////////

// function solve(input1, input2) {
//     let currStock = {};
//     for (let i = 0; i < input1.length; i += 2) {
//         let product = input1[i];
//         let qty = Number(input1[i + 1]);
//         currStock[product] = qty
//     }
//     for (let i = 0; i < input2.length; i += 2) {
//         let prod2 = input2[i];
//         let qty2 = Number(input2[i + 1]);

//         if (!currStock.hasOwnProperty(prod2)) {
//             currStock[prod2] = qty2;
//         } else {
//             currStock[prod2] += qty2
//         }
//     }
//     for (let key in currStock) {
//         console.log(`${key} -> ${currStock[key]}`);
//     }
// }
// solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//     ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])




// 04. Movies //////////////////////////////////////////////////////////////////

// function solve(input) {
//     let list = [];
//     for (let line of input) {
//         if (line.includes("addMovie")) {
//             let object = {};
//             let name = line.substring(9);
//             object.name = name
//             list.push(object)
//         }
//         else if (line.includes("directedBy")) {
//             let [movieName, movieDirector] = line.split(" directedBy ");
//             let myMovie = list.find(x => x.name == movieName)
//             if (myMovie) {
//                 myMovie.director = movieDirector
//             }
//         } else {
//             let [name, date] = line.split(" onDate ")
//             let myMovie = list.find(x => x.name == name);
//             if (myMovie) {
//                 myMovie.date = date
//             }
//         }
//     }
//     list.forEach(movie => {
//         if (movie.name && movie.date && movie.director) {
//             console.log(JSON.stringify(movie));
//         }
//     })
// }
// solve([

//     'addMovie Fast and Furious',

//     'addMovie Godfather',

//     'Inception directedBy Christopher Nolan',

//     'Godfather directedBy Francis Ford Coppola',

//     'Godfather onDate 29.07.2018',

//     'Fast and Furious onDate 30.07.2018',

//     'Batman onDate 01.08.2018',

//     'Fast and Furious directedBy Rob Cohen'

// ])




// 05. Inventory /////////////////////////////////////////////////////////////////////

// function solve(input) {
//     let heroes = [];

//     for (let line of input) {
//         let object = {}
//         let tokens = line.split(" / ");
//         let hero = tokens.shift()
//         let level = Number(tokens.shift());
//         let items = tokens.join(", ").split(", ").sort((a,b) => a.localeCompare(b)).join(", ")

//         object.hero = hero;
//         object.level = level;
//         object.items = items;
//         heroes.push(object)

//     }
// heroes.sort((a,b) => a.level - b.level).forEach(x => {
//     console.log(`Hero: ${x.hero}`);
//     console.log(`level => ${x.level}`);
//     console.log(`items => ${x.items}`);
// })

// }
// solve(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword",
// "Hes / 1 / Desolator, Sentinel, Antara"])



// 06. Make a Dictionary

// function solve(input) {

//     let object = {};
//     for (let line of input) {
//         let obj = JSON.parse(line);
//         for (let [key, value] of Object.entries(obj)) {
//             object[key] = value
//         }

//     }
//     Object.keys(object).sort((a,b) => a.localeCompare(b))
//     .forEach(x => {
//         console.log(`Term: ${x} => Definition: ${object[x]}`);
//     })

// }
// solve([

//     '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

//     '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

//     '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

//     '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

//     '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

// ])



// 09. Catalogue

// function solve(input) {
//     let object = {};

//     for (let line of input) {
//         if (!object.hasOwnProperty(line[0])) {
//             line = line.split(" : ").join(": ")
//             object[line[0]] = [line]
//         } else {
//             line = line.split(" : ").join(": ")
//             object[line[0]].push(line)
//         }
//     }
//     Object.entries(object).sort((a, b) => a[0].localeCompare(b[0])).forEach(x => {
//         console.log(`${x[0]}`);
//         x[1].sort((a, b) => a.localeCompare(b)).forEach(y => {
//             console.log(`  ${y}`);
//         })
//     })
// }
// solve(['Appricot : 20.4',

//     'Fridge : 1500',

//     'TV : 1499',

//     'Deodorant : 10',

//     'Boiler : 300',

//     'Apple : 1.25',

//     'Anti-Bug Spray : 15',

//     'T-Shirt : 10'])




/// OBJECTS AND CLASSES - MORE EXERCISES ///////////////////////////////





// 03. School Register /////////////////////////////////////////////////////////////////
// function solve(input) {

//     let list = {};
//     for (let line of input) {
//         let tokens = line.split(", ")
//         let name = tokens[0].split(": ")[1]
//         let grade = Number(tokens[1].split(": ")[1]) + 1;
//         let score = Number(tokens[2].split(": ")[1])
//         if (score >= 3) {
//             let student = { name, score };

//             if (!list.hasOwnProperty(grade)) {
//                 list[grade] = [];
//             }
//             list[grade].push(student)
//         }

//     }
//     let sorted = Object.keys(list).sort((a, b) => a - b);
//     for (let grade of sorted) {
//         let students = list[grade];
//         console.log(`${grade} Grade`);
//         console.log(`List ot students: ${students.map(s => s.name).join(', ')}`);
//         console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
//         console.log("");
//     }
//     function average(input) {
//         return input.reduce((a, b) => a + b, 0) / input.length
//     }

// }
// solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",

//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",

//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",

//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",

//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",

//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",

//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",

//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",

//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",

//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",

//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",

//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])




//  02. Flight Schedule ///////////////////////////////////////////////

function solve(input) {

    let list = [];
    for (let line of input[0]) {
        line = line.split(" ")
        let flNum = line.shift()
        let dest = line[0]
        let object = {};
        object.number = flNum;
        object.destination = dest;
        object.status = "Ready to fly";
        list.push(object)
    }
    for (let line of input[1]) {
        line = line.split(" ")
        let myFind = list.find(x => x.number == line[0])
        if (myFind) {
            myFind.status = line[1]
        }
    }
    let status = input[2]
    list.forEach(x => {
        if (x.status == status) {
            console.log(`{ Destination: '${x.destination}', Status: '${x.status}' }`);
        }
    })

}
solve([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'],

['DL2120 Cancelled',

    'WN612 Cancelled',

    'WN1173 Cancelled',

    'SK330 Cancelled'],

['Ready to fly']

])