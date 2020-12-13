// 01. Words Tracker   ///////////////////////////////////////////////

function solve(input) {
    let firstWords = input.shift().split(" ");
    let object = {};
    firstWords.forEach(word => {
        object[word] = 0;
    });
    for (let word of input) {
        if (object.hasOwnProperty(word)) {
            object[word] += 1;
        }
    }
    Object.entries(object)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => {
            console.log(`${x[0]} - ${x[1]}`);
        })
}
solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])




// 02. Odd Occurrences

function solve(input) {
    let myArr = input.toLowerCase().split(" ");
    let object = {};
    myArr
        .forEach(x => {
            if (!object.hasOwnProperty(x)) {
                object[x] = 1;
            } else {
                object[x]++;
            }
        });
    let keys = Object.keys(object).filter(x => object[x] % 2 !== 0)
        .join(" ");
    console.log(keys);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')




// 03. Piccolo  ///////////////////////////////////////////////////////

function solve(input) {
    let parkingLot = new Map();

    for (let line of input) {
        let tokens = line.split(", ");
        if (tokens[0] == 'IN') {
            parkingLot.set(tokens[1], 1)
        }
        if (tokens[0] == 'OUT') {
            parkingLot.delete(tokens[1]);
        }
    }
    if (parkingLot.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let keys = Array.from(parkingLot.keys());
        keys.sort((a, b) => a.localeCompare(b))
            .forEach(key => {
                console.log(`${key}`);
            })
    }
}
solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA'])




// 04. Party Time ///////////////////////////////////////////////////

function solve(input) {
    let partyList = {
        'VIP': [],
        'regular': [],
    }
    let line = input.shift();
    while (line !== 'PARTY') {
        if (!isNaN(line[0])) {
            partyList['VIP'].push(line)
        } else {
            partyList['regular'].push(line)
        }
        line = input.shift();
    }

    for (let line of input) {
        if (partyList['VIP'].includes(line)) {
            let index = partyList['VIP'].indexOf(line);
            partyList['VIP'].splice(index, 1);
        } else if (partyList['regular'].includes(line)) {
            let index = partyList['regular'].indexOf(line);
            partyList['regular'].splice(index, 1);
        }
    }
    console.log(partyList['VIP'].length + partyList['regular'].length);
    console.log(partyList['VIP'].join('\n') + '\n' + partyList['regular'].join('\n'));
    // partyList['VIP'].forEach(x => {
    //     console.log(x);
    // })
    // partyList['regular'].forEach(x => {
    //     console.log(x);
    // })
}
solve(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc',
    'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])




// 05. Card Game ///////////////////////////////////////////////////////////////////

function solve(input) {
    let object = {};

    for (let line of input) {
        let tokens = line.split(": ");
        let name = tokens[0]
        let cards = tokens[1].split(", ");

        if (!object.hasOwnProperty(name)) {
            object[name] = cards;
        } else {
            object[name] = object[name].concat(cards);
        }
        object[name] = new Set(object[name]);
        object[name] = Array.from(object[name]);
    }
    const colors = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }
    const power = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
    for (let key in object) {
        let total = 0;
        object[key].forEach(element => {
            let elements = element.split("");
            let color = elements.pop();
            let cardNum = elements.join("");
            if (isNaN(cardNum)) {
                cardNum = power[cardNum]
            }
            total += colors[color] * Number(cardNum);
        });
        object[key] = total
    }

    for (let key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}
solve([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])




// 06. Travel Time ////////////////////////////////////////////////////////////////////////////

function solve(input) {
    let bigObj = {};

    for (let line of input) {
        let [country, city, price] = line.split(" > ");
        price = Number(price);
        if (!bigObj.hasOwnProperty(country)) {
            bigObj[country] = {};
        }
        if (!bigObj[country].hasOwnProperty(city)) {
            bigObj[country][city] = price;
        } else {
            if (bigObj[country][city] > price) {
                bigObj[country][city] = price;
            }
        }
    }
    let sorted = Object.keys(bigObj).sort((a, b) => a.localeCompare(b));
    let result = "";

    for (let country of sorted) {
        result += country + " -> ";
        let sortedPrice = Object.keys(bigObj[country]).sort((a, b) => travelCost(a, b, bigObj, country));
        for (let city of sortedPrice) {
            result += `${city} -> ${bigObj[country][city]} `
        }
        result += '\n';
    }
    console.log(result);
    function travelCost(city1, city2, bigObject, country) {
        let priceOne = bigObject[country][city1];
        let priceTwo = bigObject[country][city2];

        return priceOne - priceTwo
    }
}
solve([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

])




// 07. Company Users  //////////////////////////////////////////////////////////////

function solve(input) {
    let list = {};

    for (let line of input) {
        let [company, id] = line.split(" -> ");
        if (!list.hasOwnProperty(company)) {
            list[company] = [];
        }
        if (!list[company].includes(id)) {
            list[company].push(id)
        };
    }

    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [key, values] of sorted) {
        console.log(`${key}\n`);
        for (let value of values) {
            console.log(`-- ${value}`);
        }
    }
}
solve([

    'SoftUni -> AA12345',

    'SoftUni -> BB12345',

    'Microsoft -> CC12345',

    'HP -> BB12345'

]);




// 08. A Miner Task  ///////////////////////////////////////////////////////////

function solve(input) {

    let list = {};
    for (let i = 0; i < input.length; i += 2) {
        let product = input[i];
        let qty = Number(input[i + 1]);
        if (!list.hasOwnProperty(product)) {
            list[product] = qty
        } else {
            list[product] += qty;
        }
    }
    for (let key in list) {
        console.log(`${key} -> ${list[key]}`);
    }

}
solve(['Gold','155','Silver','10','Copper','17'])




// 09. *Arena Tier ///////////////////////////////////////////////////////////////

function solve(input) {
    let pool = {};
    let line = input.shift()
    while (line !== "Ave Cesar") {
        if (!line.includes("vs")) {
            let [name, tech, skill] = line.split(" -> ");
            skill = Number(skill);
            if (!pool.hasOwnProperty(name)) {
                pool[name] = {};
            }
            if (!pool[name].hasOwnProperty(tech) ||
                pool[name][tech] < skill) {
                pool[name][tech] = skill;
            }
        } else {
            let [hero1, hero2] = line.split(" vs ");

            if (pool.hasOwnProperty(hero1) && pool.hasOwnProperty(hero2)) {
                let glad1Tech = pool[hero1];
                let glad2Tech = pool[hero2];
                for (let key in glad1Tech) {
                    if (glad2Tech.hasOwnProperty(key)) {
                        if (glad1Tech[key] > glad2Tech[key]) {
                            delete pool[hero2];
                        } else {
                            delete pool[hero1];
                        }
                    }
                }
            }
        }
        line = input.shift();
    }
    for (let key in pool) {
        let sum = 0;
        let outsideObj = pool[key];
        for (let insideKey in outsideObj) {
            sum += outsideObj[insideKey];
        }
        outsideObj['sum'] = sum;
    }
    Object.entries(pool)
        .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].sum} skill`);
            delete element[1].sum;
            Object.entries(element[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(element => {
                    console.log(` - ${element[0]} <!> ${element[1]}`);
                });
        })
}
solve(['Peter -> BattleCry -> 400', 'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200', 'Stefan -> Tiger -> 250', 'Ave Cesar'])




// 10. *Legendary Farming ////////////////////////////////////////////////////////////

function solve(input) {
    let myArr = input.toLowerCase().split(" ")
    let keyMat = {
        "shards": 0,
        "motes": 0,
        "fragments": 0
    };
    let junk = {};
    let isTrue = true
    for (let i = 0; i < myArr.length; i += 2) {
        let product = myArr[i + 1];
        let qty = Number(myArr[i]);
        if (isTrue) {
            if (product == "shards" || product == "motes" || product == "fragments") {
                switch (product) {
                    case "shards":
                        keyMat["shards"] += qty;
                        if (keyMat["shards"] >= 250) {
                            console.log("Shadowmourne obtained!");
                            keyMat[product] -= 250;
                            isTrue = false
                            break;
                        }
                        break;
                    case "fragments":
                        keyMat["fragments"] += qty;
                        if (keyMat["fragments"] >= 250) {
                            console.log("Valanyr obtained!");
                            keyMat["fragments"] -= 250;
                            isTrue = false
                            break;
                        }
                        break;
                    case "motes":
                        keyMat["motes"] += qty;
                        if (keyMat["motes"] >= 250) {
                            console.log("Dragonwrath obtained!");
                            keyMat["motes"] -= 250;
                            isTrue = false
                            break;
                        }
                        break;
                }
            } else {
                if (!junk.hasOwnProperty(product)) {
                    junk[product] = qty
                } else {
                    junk[product] += qty
                }
            }
        }
    }
    Object.entries(keyMat)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`${element[0]}: ${element[1]}`)

        });
    Object.keys(junk)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(`${key}: ${junk[key]}`)
        })
}
solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')