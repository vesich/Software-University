// 01. City Record ///////////////////////////////////////////////

function solve(name, population, treasury) {
    let city = {
        name,
        population,
        treasury
    }
    return city;

}
solve('Tortuga',

    7000,

    15000)




// 02. Town Population ////////////////////////////////////////////////////////////

function solve(input) {
    let obj = {};
    for (let line of input) {
        let [town, population] = line.split(" <-> ");
        population = +population;

        if (!obj[town]) {
            obj[town] = 0;
        }
        obj[town] += population
    }
    for (let entries in obj) {
        console.log(`${entries} : ${obj[entries]}`);
    }
}

solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])




// 03. City Taxes ////////////////////////////////////////////////////////

function solve(name, population, treasury) {
    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100)
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * percent / 100);
        }
    }
    return obj;
}
let result = solve('Tortuga', 7000, 15000)
result.collectTaxes();
result.applyGrowth(10);
result.applyRecession(5);

console.log(result);




/// 04. Object Factory //////////////////////////////////////////////////////


const library = {

    print: function () {

        console.log(`${this.name} is printing a page`);

    },

    scan: function () {

        console.log(`${this.name} is scanning a document`);

    },

    play: function (artist, track) {

        console.log(`${this.name} is playing '${track}' by ${artist}`);

    },

};

const orders = [

    {

        template: { name: 'ACME Printer' },

        parts: ['print']

    },

    {

        template: { name: 'Initech Scanner' },

        parts: ['scan']

    },

    {

        template: { name: 'ComTron Copier' },

        parts: ['scan', 'print']

    },

    {

        template: { name: 'BoomBox Stereo' },

        parts: ['play']

    },

];


function factory(library, orders) {

    let result = [];

    orders.forEach(order => {
        const device = Object.assign({}, order.template)
        for (let part of order.parts) {
            device[part] = library[part];
        }

        result.push(device)
    })
    return result;
}

const products = factory(library, orders);

console.log(products); 
const something = products[2];
something.scan("something")




// 05. Assembly Line ///////////////////////////////////////////////////

function createAssemblyLine() {

    function hasClima(obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
            return obj;
        }
    }

    function hasAudio(obj) {
        obj.currentTrack = {
            name: null,
            artist: null
        }
        obj.nowPlaying = () => {
            if (obj.currentTrack.name != null && obj.currentTrack.artist != null) {
                console.log(`Now Playing '${obj.currentTrack.name}' by '${obj.currentTrack.artist}'`);
            }
        }
    }

    function hasParktronic(obj) {
        obj.checkDistance = (dist) => {
            if (dist < 0.1) {
                console.log('Beep! Beep! Beep');
            } else if (dist < 0.25) {
                console.log('Beep! Beep!');
            } else if (dist < 0.5) {
                console.log('Beep!');
            } else {
                console.log('');
            }
        }
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {

    make: 'Toyota',

    model: 'Avensis'

};

assemblyLine.hasClima(myCar);

console.log(myCar.temp);

myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);


assemblyLine.hasAudio(myCar);

myCar.currentTrack = {

    name: 'Never Gonna Give You Up',

    artist: 'Rick Astley'

};

myCar.nowPlaying();


assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);


console.log(myCar);