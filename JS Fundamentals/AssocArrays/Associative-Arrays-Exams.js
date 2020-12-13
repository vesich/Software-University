// 03. Pirates //////////////////// Final Exam //// 04 April

function solve(input) {
    let city = {}
    let line = input.shift()
    let isAhoy = true
    while (line != 'Sail') {
        let [name, population, gold] = line.split("||")
        population = Number(population);
        gold = Number(gold);
        if (!city.hasOwnProperty(name)) {
            city[name] = {}
            city[name].population = population;
            city[name].gold = gold;
        } else {
            city[name].population += population
            city[name].gold += gold;
        }
        line = input.shift()
    }
    if (line == 'Sail') {
        for (let line of input) {
            let tokens = line.split("=>")
            if (tokens[0] == "Plunder") {
                let town = tokens[1];
                let people = Number(tokens[2]);
                let gold = Number(tokens[3])
                if (city.hasOwnProperty(town)) {
                    city[town].population -= people;
                    city[town].gold -= gold;
                    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                    if (city[town].population == 0 || city[town].gold == 0) {
                        delete city[town];
                        console.log(`${town} has been wiped off the map!`);
                    }
                }
            }
            if (tokens[0] == "Prosper") {
                let town = tokens[1];
                let gold = Number(tokens[2])
                if (gold < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    city[town].gold += gold
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${city[town].gold} gold.`);
                }
            }
            if (line == "End") {
                isAhoy = false
                break;
            }
        }
    }
    if (!isAhoy) {
        if (Object.keys(city).length == 0) {
            console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
        } else {
            let sorted = Object.entries(city).sort((a, b) => {
                if (a[1].gold == b[1].gold) {
                    return a[0].localeCompare(b[0]);
                } else {
                    return b[1].gold - a[1].gold;
                }
            })
            console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
            for (let kvp of sorted) {
                console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`)
            }
        }
    }
}
solve(['Nassau||95000||1000',

    'San Juan||930000||1250',

    'Campeche||270000||690',

    'Port Royal||320000||1000',

    'Port Royal||100000||2000',

    'Sail',

    'Prosper=>Port Royal=>-200',

    'Plunder=>Nassau=>94000=>750',

    'Plunder=>Nassau=>1000=>150',

    'Plunder=>Campeche=>150000=>690',

    'End'])




// 03. Heroes of Code and Logic VII /////////////// FINAL EXAM //// 04 April ////

function solve(input) {
    let n = Number(input.shift());
    let heroes = {};
    let isTrue = true;
    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input[i].split(" ")
        hp = +hp;
        mp = +mp;
        if (!heroes.hasOwnProperty(hero)) {
            heroes[hero] = {};
            heroes[hero].hp = hp;
            heroes[hero].mp = mp;
        }
    }
    for (let i = n; i < input.length; i++) {
        if (input[i] == "End") {
            isTrue = false
            break;
        } else if (input[i].includes("CastSpell")) {
            let tokens = input[i].split(" - ");
            let hero = tokens[1];
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (heroes[hero].mp >= mpNeeded) {
                heroes[hero].mp -= mpNeeded
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if (input[i].includes("TakeDamage")) {
            let tokens = input[i].split(" - ");
            let hero = tokens[1];
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            heroes[hero].hp -= damage
            if (heroes[hero].hp <= 0) {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            } else {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
            }
        } else if (input[i].includes("Recharge")) {
            let tokens = input[i].split(" - ");
            let hero = tokens[1];
            let amountMP = Number(tokens[2]);
            let firstMP = heroes[hero].mp;
            heroes[hero].mp += amountMP
            if (heroes[hero].mp >= 200) {
                heroes[hero].mp = 200;
                console.log(`${hero} recharged for ${200 - firstMP} MP!`);
            } else {
                console.log(`${hero} recharged for ${amountMP} MP!`);
            }
        } else if (input[i].includes("Heal")) {
            let tokens = input[i].split(" - ");
            let hero = tokens[1];
            let amountHP = Number(tokens[2]);
            let firstHP = heroes[hero].hp
            heroes[hero].hp += amountHP
            if (heroes[hero].hp >= 100) {
                heroes[hero].hp = 100;
                console.log(`${hero} healed for ${100 - firstHP} HP!`);
            } else {
                console.log(`${hero} healed for ${amountHP} HP!`);
            }
        }
    }
    if (!isTrue) {
        let sorted = Object.entries(heroes)
        sorted
            .sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]))
            .forEach(element => {
                console.log(`${element[0]}\n  HP: ${element[1].hp}\n  MP: ${element[1].mp}`)
            });
    }
}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])




// Problem 3. Need for Speed III /// FINAL EXAM RETAKE // 10 April

function solve(input) {
    let numOfCars = Number(input.shift())
    let garage = {};

    for (let i = 0; i < numOfCars; i++) {
        let [car, mileage, fuel] = input[i].split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (!garage.hasOwnProperty(car)) {
            garage[car] = {};
            garage[car].mileage = mileage;
            garage[car].fuel = fuel;
        }

    }

    for (let i = numOfCars; i < input.length; i++) {
        let line = input[i];
        if (line.includes("Drive")) {
            let tokens = line.split(" : ")
            let car = tokens[1];
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3])

            if (garage[car].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                garage[car].mileage += distance
                garage[car].fuel -= fuel
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (garage[car].mileage >= 100000) {
                delete garage[car]
                console.log(`Time to sell the ${car}!`);
            }
        } else if (line.includes("Refuel")) {
            let tokens = line.split(" : ")
            let car = tokens[1];
            let fuel = Number(tokens[2]);
            let oldFuel = garage[car].fuel
            if (garage[car].fuel + fuel >= 75) {
                garage[car].fuel = 75
                fuel = 75 - oldFuel
            } else {
                garage[car].fuel += fuel
            }
            console.log(`${car} refueled with ${fuel} liters`);
        } else if (line.includes("Revert")) {
            let tokens = line.split(" : ");
            let car = tokens[1];
            let mileage = Number(tokens[2])
            garage[car].mileage -= mileage
            if (garage[car].mileage < 10000) {
                garage[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${mileage} kilometers`);
            }
        } else if (line == "Stop") {
            let sorted = Object.entries(garage).sort((a, b) => b[1].mileage - a[1].mileage || a[0].localeCompare(b[0]))
            for (let kvp of sorted) {
                console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);

                }
            }
        }
    }
solve([ 

    '3', 

    'Audi A6|38000|62', 

    'Mercedes CLS|11000|35', 

    'Volkswagen Passat CC|45678|5', 

    'Drive : Audi A6 : 543 : 47', 

    'Drive : Mercedes CLS : 94 : 11', 

    'Drive : Volkswagen Passat CC : 69 : 8', 

    'Refuel : Audi A6 : 50', 

    'Revert : Mercedes CLS : 500', 

    'Revert : Audi A6 : 30000', 

    'Stop' 
] )




// 03.Plant Discovery //// FINAL EXAM ///// 09 August ////

function solve(input) {
    let plants = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let line = input[i]
        let [plant, rarity] = line.split("<->");
        rarity = Number(rarity);
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = {}
            plants[plant].rarity = rarity
            plants[plant].rating = [];
        } else {
            plants[plant].rarity = rarity
        }
    }
    let isValid = true
    for (let i = n; i < input.length; i++) {
        let line = input[i]
        if (line.includes("Rate")) {
            let tokens = line.substring(6).split(" - ")
            let [plant, rating] = tokens;
            rating = Number(rating);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating.push(rating)
            } else {
                console.log('error');
            }
        } else if (line.includes("Update")) {
            let tokens = line.substring(8).split(" - ");
            let [plant, newRar] = tokens;
            newRar = +newRar;
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = newRar
            } else {
                console.log('error');
            }
        } else if (line.includes("Reset")) {
            let plant = line.substring(7);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = [];
            } else {
                console.log('error');
            }
        } else if (line == "Exhibition") {
            isValid = false;
            break;
        }
    }
    if (!isValid) {
        console.log("Plants for the exhibition:");
        let sorted = Object.entries(plants).sort((a, b) => b[1].rarity - a[1].rarity || averageRating(a, b))
        for (let entry of sorted) {
            let sum = 0;
            for (let el of entry[1].rating) {
                sum += el
            }
            if (entry[1].rating.length == 0) {
                sum = 0
            } else {
                sum /= entry[1].rating.length
            }
            console.log(`- ${entry[0]}; Rarity: ${entry[1].rarity}; Rating: ${sum.toFixed(2)}`);
        }
    }
    function averageRating(a, b) {
        let sumA = a[1].rating.reduce((x, y) => x + y)
        if (sumA !== 0) {
            sumA /= a[1].rating.length
        } else {
            sumA = 0;
        }
        let sumB = b[1].rating.reduce((x, y) => x + y)
        if (sumB !== 0) {
            sumB /= b[1].rating.length
        } else {
            sumB = 0;
        }
        return sumB - sumA
    }
}
solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
])




// 03. The Pianist //////////// Final EXAM RETAKE ///////////// 15 August

function solve(input) {
    let n = +input.shift()
    let object = {}
    for (let i = 0; i < n; i++) {
        let line = input[i].split("|");
        let [piece, composer, key] = line;
        if (!object.hasOwnProperty(piece)) {
            object[piece] = {};
            object[piece].composer = composer
            object[piece].key = key
        }
    }
    let isTrue = true;
    for (let i = n; i < input.length; i++) {
        let line = input[i].split("|")
        let command = line.shift()
        switch (command) {
            case "Add":
                let [piece, composer, key1] = line;
                if (object.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    object[piece] = {}
                    object[piece].composer = composer
                    object[piece].key = key1
                    console.log(`${piece} by ${composer} in ${key1} added to the collection!`);
                }
                break;
            case "Remove":
                let piece1 = line[0]
                if (object.hasOwnProperty(piece1)) {
                    delete object[piece1]
                    console.log(`Successfully removed ${piece1}!`);
                } else {
                    console.log(`Invalid operation! ${piece1} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                let [piece2, newKey] = line;
                if (!object.hasOwnProperty(piece2)) {
                    console.log(`Invalid operation! ${piece2} does not exist in the collection.`);
                } else {
                    object[piece2].key = newKey
                    console.log(`Changed the key of ${piece2} to ${newKey}!`);
                }
                break;
            case "Stop":
                isTrue = false
                break;
        }
    }
    if (!isTrue) {
        Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer))
            .forEach(obj => {
                console.log(`${obj[0]} -> Composer: ${obj[1].composer}, Key: ${obj[1].key}`);
            })
    }
}
solve([

    '4',

    'Eine kleine Nachtmusik|Mozart|G Major',

    'La Campanella|Liszt|G# Minor',

    'The Marriage of Figaro|Mozart|G Major',

    'Hungarian Dance No.5|Brahms|G Minor',

    'Add|Spring|Vivaldi|E Major',

    'Remove|The Marriage of Figaro',

    'Remove|Turkish March',

    'ChangeKey|Spring|C Major',

    'Add|Nocturne|Chopin|C# Minor',

    'Stop'

])