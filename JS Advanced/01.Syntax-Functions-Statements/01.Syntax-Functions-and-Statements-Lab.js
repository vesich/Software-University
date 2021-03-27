// 01. Echo Function ///////////////////////////////////////////////

function solve(input) {
    return (`${input.length}\n${input}`);

}
console.log(solve('strings are easy' ))



// 02. String Length ////////////////////////////////////////////////

function solve(arg1, arg2, arg3) {
    let totalLength = arg1.length + arg2.length + arg3.length;
    let averageLength = totalLength / 3
    console.log(totalLength);
    console.log(Math.floor(averageLength));
}
solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3')




// 03. Largest Number /////////////////////////////////////////////////

function solve(arg1, arg2, arg3) {
    return `The largest number is ${Math.max(Number(arg1), Number(arg2), Number(arg3))}.`
}

console.log(solve(-3, -5, -22.5 ))




// 04. Circle Area ////////////////////////////////////////////////////

function solve(input) {
    let area = 0;
    let inputType = typeof (input)

    if (inputType == 'number') {
        area = (Math.PI * input * input).toFixed(2);
        console.log(area);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
solve(5)
solve('five')




// 05. Math Operations /////////////////////////////////////////////////

function calculator(arg1, arg2, operator) {
    switch (operator) {
        case '+': console.log(arg1 + arg2); break;
        case '-': console.log(arg1 - arg2); break;
        case '*': console.log(arg1 * arg2); break;
        case '/': console.log(arg1 / arg2); break;
        case '%': console.log(arg1 % arg2); break;
        case '**': console.log(Math.pow(arg1, arg2)); break;
    }
}

calculator(5, 6, '+')
calculator(3, 4, '**')




// 06. Sum of Numbers N..M   ////////////////////////////////////////////

function solve(arg1, arg2) {
    let n = +arg1;
    let m = +arg2;
    let result = 0;
    for (let i = n; i <= m; i++) {
        result += i;
    }
    return result
}
console.log(solve('-8', '20'));




// 07. Day of Week //////////////////////////////////////////////////////

function week(input) {
    switch (input) {
        case 'Monday':
            console.log(1);
            break;
        case 'Tuesday':
            console.log(2);
            break;
        case 'Wednesday':
            console.log(3);
            break;
        case 'Thursday':
            console.log(4);
            break;
        case 'Friday':
            console.log(5);
            break;
        case 'Saturday':
            console.log(6);
            break;
        case 'Sunday':
            console.log(7);
            break;
        default:
            console.log('error');
            break;
    }
}
week("Monday")
week('Friday')
week('invalid')




// 08. Square of Stars //////////////////////////////////////////////////////////

function solve(input) {

    for (let i = 0; i < input; i++) {
        let res = '*'.repeat(input)
        console.log(res.split("").join(" "));
    }
}
solve(5);




// 09. Aggregate Elements //////////////////////////////////////////////////////

function solve(input) {
    console.log(input.reduce((a, b) => a + b, 0))
    let sum = 0;
    input.forEach(element => {
        sum += 1 / element
    });
    console.log(sum);
    console.log(input.join(""));
}
solve([1, 2, 3]);
solve([2, 4, 8, 16])