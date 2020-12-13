// 01. Phone Book   /////////////////////////////////////////////////////////

function solve(input) {
    let phoneBook = {};

    for (line of input) {
        let [name, number] = line.split(" ");
        phoneBook[name] = number;
    }
    for (let key of Object.keys(phoneBook)) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }

}
solve(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344']);




// 02. Meetings //////////////////////////////////////////////////////////

function solve(input) {
    let schedule = {};

    for (let line of input) {
        let [day, name] = line.split(" ");
        if (!schedule.hasOwnProperty(day)) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}`);
        }
    }
    for (let entries of Object.entries(schedule)) {
        console.log(`${entries[0]} -> ${entries[1]}`);
    }
}
solve(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim'])




// 03. Address Book  //////////////////////////////////////////////////////////

function solve(input) {
    let addressBook = {};
    for (let line of input) {
        let [name, address] = line.split(":");
        addressBook[name] = address;
    }
    Object
        .entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]} -> ${element[1]}`)
        })
};
solve(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);




// 04. Storage   //////////////////////////////////////////////////////

function solve(input) {
    let storage = new Map();
    for (let line of input) {
        let [product, qty] = line.split(" ");
        qty = Number(qty);

        if (!storage.has(product)) {
            storage.set(product, 0);
        }
        let currQty = storage.get(product);
        let newQty = currQty += qty
        storage.set(product, newQty)
    }
    for (let kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
solve(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40']);




// 05. School Grades  //////////////////////////////////////////////

function solve(input) {
    let list = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens[0];
        let grades = tokens.slice(1).map(Number)
        if (!list.hasOwnProperty(name)) {
            list[name] = grades;
        } else {
            list[name] = list[name].concat(grades);
        }
    }
    Object.entries(list)
        .sort(averageGrade)
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].join(", ")}`);
        });
    function averageGrade(a, b) {
        let sumA = 0;
        a[1].forEach(x => sumA += x);
        let avgA = sumA / a[1].length;
        let sumB = 0;
        b[1].forEach(x => sumB += x);
        let avgB = sumB / b[1].length;
        return avgA - avgB;
    }
}
solve(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);




// 06. Word Occurrences   //////////////////////////////////////////

function solve(input) {
    let list = {};
    input.forEach(el => {
        if (!list.hasOwnProperty(el)) {
            list[el] = 1
        } else {
            list[el] += 1;
        }
    });

    Object.entries(list)
        .sort((a, b) => b[1] - a[1])
        .forEach(element => {
            console.log(`${element[0]} -> ${element[1]} times`);
        })
};
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);




//// 07. Neighborhoods  ///////////////////////////////////////////////

function solve(input) {
    let firstElement = input.shift().split(", ");
    let object = {};
    firstElement.forEach(x => {
        if (!object.hasOwnProperty(x)) {
            object[x] = [];
        }
    });

    for (let line of input) {
        let [street, name] = line.split(" - ");
        if (object.hasOwnProperty(street)) {
            object[street].push(name);
        }
    }
    Object
        .entries(object)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].length}`);
            element[1].forEach(x => {
                console.log(`--${x}`);
            })
        })
}
solve(['Abbey Street, Herald Street, Bright Mews',

    'Bright Mews - Garry',

    'Bright Mews - Andrea',

    'Invalid Street - Tommy',

    'Abbey Street - Billy'])