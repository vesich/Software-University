//01

// function solve(city, pop, tres) {

//     return {
//         name: city,
//         population: pop,
//         treasury: tres
//     }
// }
// console.log(solve('Santo Domingo',

//     12000,

//     23500))



//02

// function solve(params) {

//     let towns = {};

//     params.forEach(tuple => {
//         let [name, population] = tuple.split(" <-> ");
//         population = +population;
//         if (!towns[name]) {
//             towns[name] = 0;
//         }
//         towns[name] += population
//     })
//     for (let tuple of Object.entries(towns)) {
//         console.log(tuple[0] + " : " + tuple[1]);
//     }
// }
// solve(['Istanbul <-> 100000',

//     'Honk Kong <-> 2100004',

//     'Jerusalem <-> 2352344',

//     'Mexico City <-> 23401925',

//     'Istanbul <-> 1000'])



//03 

// function solve(name, population, treasury) {

//     let obj = {
//         name,
//         population,
//         treasury,
//         taxRate: 10,
//         collectTaxes() {
//             this.treasury += population * this.taxRate
//         },
//         applyGrowth(percentage) {
//             this.population += Math.ceil(this.population * percentage / 100)
//         },
//         applyRecession(percentage) {
//             this.treasury -= Math.ceil(this.treasury * percentage / 100)
//         }
//     }
//     return obj

// }
// let city = solve('Tortuga', 7000, 15000);

// city.collectTaxes();

// console.log(city.treasury);

// city.applyGrowth(5);

// console.log(city.population); 



//04


// const library = {

//     print: function () {

//         console.log(`${this.name} is printing a page`);

//     },

//     scan: function () {

//         console.log(`${this.name} is scanning a document`);

//     },

//     play: function (artist, track) {

//         console.log(`${this.name} is playing '${track}' by ${artist}`);

//     },

// };

// const orders = [

//     {

//         template: { name: 'ACME Printer' },

//         parts: ['print']

//     },

//     {

//         template: { name: 'Initech Scanner' },

//         parts: ['scan']

//     },

//     {

//         template: { name: 'ComTron Copier' },

//         parts: ['scan', 'print']

//     },

//     {

//         template: { name: 'BoomBox Stereo' },

//         parts: ['play']

//     },

// ];


// function factory(library, orders) {

//     let result = [];

//     orders.forEach(order => {
//         const device = Object.assign({}, order.template)
//         for (let part of order.parts) {
//             device[part] = library[part];
//         }

//         result.push(device)
//     })
//     return result;
// }

// const products = factory(library, orders);

// console.log(products); 
// const something = products[2];
// something.scan("something")



//// 05. assembly 

// function createAssemblyLine() {


//     function hasClima(obj) {
//         obj.temp = 21;
//         obj.tempSettings = 21;
//         obj.adjustTemp = () => {
//             if (obj.temp < obj.tempSettings) {
//                 obj.temp++;
//             } else if (obj.temp > obj.tempSettings) {
//                 obj.temp--;
//             }
//             return obj;
//         }

//     }

//     function hasAudio(obj) {
//         obj.currentTrack = {
//             name: null,
//             artist: null
//         }
//         obj.nowPlaying = () => {
//             if (obj.currentTrack.name != null && obj.currentTrack.artist != null) {
//                 console.log(`Now Playing '${obj.currentTrack.name}' by '${obj.currentTrack.artist}'`);
//             }
//         }

//     }

//     function hasParktronic(obj) {
//         obj.checkDistance = (dist) => {
//             if (dist < 0.1) {
//                 console.log('Beep! Beep! Beep');
//             } else if (dist < 0.25) {
//                 console.log('Beep! Beep!');
//             } else if (dist < 0.5) {
//                 console.log('Beep!');
//             } else {
//                 console.log('');
//             }
//         }
//     }

//     return {
//         hasClima,
//         hasAudio,
//         hasParktronic
//     }
// }

// const assemblyLine = createAssemblyLine();

// const myCar = {

//     make: 'Toyota',

//     model: 'Avensis'

// };

// assemblyLine.hasClima(myCar);

// console.log(myCar.temp);

// myCar.tempSettings = 18;

// myCar.adjustTemp();

// console.log(myCar.temp); 


// assemblyLine.hasAudio(myCar); 

// myCar.currentTrack = { 

//     name: 'Never Gonna Give You Up', 

//     artist: 'Rick Astley' 

// }; 

// myCar.nowPlaying(); 


// assemblyLine.hasParktronic(myCar); 

// myCar.checkDistance(0.4); 

// myCar.checkDistance(0.2); 


// console.log(myCar);



//// 06. From JSON to HTML Table ////////////////////////////////

// function fromJSONToHTMLTable(input) {

//     input = JSON.parse(input);


//     let table = document.createElement('table');
//     let tr = document.createElement('tr')
//     for (let key in input[0]) {
//         let th = document.createElement('th')
//         th.textContent = key.trim()
//         tr.appendChild(th)
//         table.appendChild(tr)
//     }
//     container.appendChild(table)

//     input.forEach(object => {
//        let tr = document.createElement('tr');
//         for (let value of Object.values(object)) {

//             let td = document.createElement('td')
//             td.textContent = value;
//             tr.appendChild(td)


//         }
//         table.appendChild(tr)
//     })

// }
// fromJSONToHTMLTable(`[{"Name":"Pesho", 

// "Score": 4,

//     " Grade": 8},
//     {
//         "Name": "Gosho",

//         "Score": 5,

//         " Grade": 8
//     },

//     {
//         "Name": "Angel",

//         "Score": 5.50,

//         " Grade": 10
//     }]` )



////////////////////////////////////////////////////////////////////////////////////

//// EXERCISES

//01. Calorie Object ////

// function solve(input) {
//     let obj = {};
//     for (let i = 0; i < input.length; i += 2) {
//         obj[input[i]] = +input[i + 1]
//     }
//     return obj
// }
// console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))




////02. Construction Crew ///////////////////////////////////////////////

// function solve(obj) {
//     if (obj.dizziness == true) {
//         obj.levelOfHydrated += obj.weight * obj.experience * 0.1
//         obj.dizziness = false;
//     }

//     return obj
// }
// console.log(solve({ weight: 120, 

//     experience: 20, 

//     levelOfHydrated: 200, 

//     dizziness: true }  ))




////03. Car Factory //////////////////////////////////

// function solve(input) {

//     function getEngine(power) {
//         const engine = [
//             { power: 90, volume: 1800 },
//             { power: 120, volume: 2400 },
//             { power: 200, volume: 3500 }
//         ]
//         return engine.find(el => el.power >= power)
//     }

//     function getCarriage(param1, param2) {
//         return {
//             type: param1,
//             color: param2
//         }
//     }

//     function getWheels(num) {
//         if (num % 2 == 0) {
//             num -= 1;
//         }
//         let wheels = [];
//         wheels.length = 4

//         return wheels.fill(num, 0)

//     }


//     return {
//         model: input.model,
//         engine: getEngine(input.power),
//         carriage: getCarriage(input.carriage, input.color),
//         wheels: getWheels(input.wheelsize)

//     }

// }
// console.log(solve({
//     model: 'VW Golf II',

//     power: 90,

//     color: 'blue',

//     carriage: 'hatchback',

//     wheelsize: 14
// }));




//// 04. Heroic Inventory //////////////

// function solve(input) {
//     let result = [];

//     input.forEach(line => {
//         let [name, level, items] = line.split(' / ');
//         level = +level;

//         if (items) {
//             items = items.split(", ")
//         } else {
//             items = []
//         }
//         let hero = {
//             name,
//             level,
//             items
//         }
//         result.push(hero)
//     })

//     return JSON.stringify(result);

// }
// console.log(solve(['Isacc / 25 ',

//     'Derek / 12 / BarrelVest, DestructionSword',

//     'Hes / 1 / Desolator, Sentinel, Antara']))




//// 05. Lowest price in City //////////////////////


// function solve(array) {
//     let products = new Map();
//     for (let sentence of array) {
//         let [town, product, price] = sentence.split(" | ");
//         if (!products.has(product)) {
//             products.set(product, new Map());
//         }
//         products.get(product).set(town, Number(price));
//     }
//     for (let [key, value] of products) {
//         let lowest = ([...value].reduce(function (a, b) {
//             if (a[1] < b[1]) {
//                 return a;
//             } else if (a[1] > b[1]) {
//                 return b;
//             }
//             return a;
//         }));
//         console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
//     }
// }


// solve(['Sample Town | Sample Product | 1000',

//     'Sample Town | Orange | 2',

//     'Sample Town | Peach | 1',

//     'Sofia | Orange | 3',

//     'Sofia | Peach | 2',

//     'New York | Sample Product | 1000.1',

//     'New York | Burger | 10'])




//// 08. Rectangle //////////////////////

// function rectangle(width, height, color) {

//     function calcArea() {
//         return this.width * this.height
//     }

//     function colorize(col) {
//         return col[0].toUpperCase() + col.slice(1).toLowerCase()

//     }
//     return {
//         width: Number(width),
//         height: Number(height),
//         color: colorize(color),
//         calcArea

//     }

// }

// let rect = rectangle(4, 5, 'red');

// console.log(rect.width);

// console.log(rect.height);

// console.log(rect.color);

// console.log(rect.calcArea()); 



