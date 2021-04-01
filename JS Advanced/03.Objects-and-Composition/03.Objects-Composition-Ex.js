// 01. Calorie Object ///////////////////////////////////////////

function solve(input) {
    let result = {};
    for (let i = 0; i < input.length; i += 2) {
        result[input[i]] = Number(input[i + 1])
    }
    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));




// 02. Construction Crew //////////////////////////////////////

function solve(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience
        worker.dizziness = false;
    }
    return worker
}
console.log(solve({ weight: 95, 

    experience: 3, 

    levelOfHydrated: 0, 

    dizziness: false } ));




// 03. Car Factory ///////////////////////////////////////////

function solve(input) {
    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]
        return engines.find(el => el.power >= power);
    }
    function getCarriage(param1, param2) {
        return {
            type: param1,
            color: param2
        }
    }
    function getWheels(params) {
        if (params % 2 === 0) {
            params -= 1;
        }
        let wheels = [];
        wheels.length = 4

        return wheels.fill(params, 0)
    }
    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}

console.log(solve({
    model: 'Opel Vectra',

    power: 110,

    color: 'grey',

    carriage: 'coupe',

    wheelsize: 16
}));




// 04. Heroic Inventory ///////////////////////////////////////////

function solve(input) {
    let result = [];

    for (let line of input) {
        let [name, level, firstItems] = line.split(" / ");
        level = +level;
     let items = firstItems ? firstItems.split(", ") : []
        let heroes = {
            name,
            level,
            items
        }
        result.push(heroes)
    }
    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']))




// 05. Lowest Prices in Cities /////////////////////////////////////

function solve(array) {
    let products = new Map();
    for (let sentence of array) {
        let [town, product, price] = sentence.split(" | ");
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }
    for (let [key, value] of products) {
        let lowest = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            }
            return a;
        }));
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}


solve(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])




// 06. Store Catalogue //////////////////////////////////////////////

function solve(input) {
    let obj = {};
    for (let line of input) {
        line = line.split(" : ").join(': ')
        if (!obj[line[0]]) {
            obj[line[0]] = []
        }
        obj[line[0]].push(line)

        obj[line[0]].sort((a, b) => a.localeCompare(b))
    }

    let result = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        console.log(entry[0]);
        entry[1].forEach(line => {
            console.log(`  ${line}`);
        })
    })
    return result;
}
console.log(solve(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']));




// 07. Towns to JSON /////////////////////////////////////////////////

function solve(input) {

    let [columns, ...table] = input.map(splitLine);

    function isEmptyString(x) {
        return x !== "";
    }

    function convertIfNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2))
    }

    function splitLine(input) {
        return input.split('|').filter(isEmptyString).map(x => x.trim()).map(convertIfNum);
    }
    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }))

}

////////////////////////////////////////////////////////////

function solve(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] =
            town.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude:
                Number(lat).toFixed(2), Longitude: Number(lng).toFixed(2) };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));;
}

solve(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']);




// 08. Rectangle ////////////////////////////////////////////////////

function rectangle(width, height, color) {

    function calcArea() {
        return this.width * this.height
    }

    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1)
    }

    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }
}

rectangle(4, 5, 'red')

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea()); 




// 09. Sorted List /////////////////////////////////////////////////////////

function createSortedList() {
    let list = [];

    function add(x) {
        list.push(x);
        this.size++
        list.sort((a, b) => a - b)
    }

    function remove(index) {
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        if (index >= 0 && index < list.length) {
            return list[index]
        }
    }

    return {
        size: 0,
        add,
        remove,
        get
    }
}

let list = createSortedList();
list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1)); 




