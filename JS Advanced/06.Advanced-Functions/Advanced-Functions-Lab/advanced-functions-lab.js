// 01.Area and Volume Calculator //////////////////////////////////////

function solve(area, vol, data) {

    data = JSON.parse(data);
    const result = [];

    data.forEach(row => {

        const objArea = area.call(row);
        const objVolume = vol.call(row);

        const obj = {
            area: objArea,
            volume: objVolume
        }
        result.push(obj);
    })
    return result
}
console.log(solve(area, vol, `[ 

    {"x":"10","y":"-22","z":"10"}, 

    {"x":"47","y":"7","z":"-5"}, 

    {"x":"55","y":"8","z":"0"}, 

    {"x":"100","y":"100","z":"100"}, 

    {"x":"55","y":"80","z":"250"} 

    ]` ))


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};




// 02. Add ///////////////////////////////////////////////////////

function solution(n) {
    let sum = n;
    function adding(y) {
        return sum += y
    }
    return adding
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));




// 03. Currency Format ////////////////////////////////////////////////////


function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {


    let dollarFormatter = value => currencyFormatter(separator, symbol, symbolFirst, value);
    return dollarFormatter;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));   // $ 5345,00 

console.log(dollarFormatter(3.1429)); // $ 3,14 

console.log(dollarFormatter(2.709));  // $ 2,71 




// 04. Filter Employees ////////////////////////////////////////////////////

function solve(input, fil) {
    input = JSON.parse(input)

    // let [prop, val] = fil.split("-")
    let arr = [];

    let prop = ''
    let val = fil === 'all' ? fil : fil.split("-")[1];
    if (fil.split("-")[0]) {
        prop = fil.split("-")[0]
    }

    input.forEach(object => {
        if (object[prop] == val) {
            let str = "";
            str = object.first_name + " " + object.last_name + " - " + object.email;
            arr.push(str);
        } else if (val == 'all') {
            let str = "";
            str = object.first_name + " " + object.last_name + " - " + object.email;
            arr.push(str);
        }
    })

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i}. ${arr[i]}`);
    }
}


solve(`[{ 

    "id": "1", 

    "first_name": "Kaylee", 

    "last_name": "Johnson", 

    "email": "k0@cnn.com", 

    "gender": "Female" 

  }, { 

    "id": "2", 

    "first_name": "Kizzee", 

    "last_name": "Johnson", 

    "email": "kjost1@forbes.com", 

    "gender": "Female" 

  }, { 

    "id": "3", 

    "first_name": "Evanne", 

    "last_name": "Maldin", 

    "email": "emaldin2@hostgator.com", 

    "gender": "Male" 

  }, { 

    "id": "4", 

    "first_name": "Evanne", 

    "last_name": "Johnson", 

    "email": "ev2@hostgator.com", 

    "gender": "Male" 

  }]`,

    'all')




//05. Command Processor ///////////////////////////////////

function solution() {
    let str = '';

    function append(str1) {
        return str += str1
    }

    function removeStart(n) {
        return str = str.slice(n)  // str.substring(-n, 0)
    }

    function removeEnd(n) {
        return str = str.slice(0, str.length - n)
    }

    function print() {
        console.log(str);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}



let firstZeroTest = solution();



firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print()


let secondZeroTest = solution();

secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();




//06. List Processor ///////////////////////////////

function processCommands(commands) {
    let commandProcessor = function () {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter(x => x != item),
            print: () => console.log(list.join(","))
        }
    };

    let func2 = commandProcessor();
    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        func2[cmdName](arg);
    }
}
processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processCommands(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

