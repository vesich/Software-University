// 01. Fruit ///////////////////////////////////////////////////

function solve(fruit, qty, price) {
    return `I need $${(price * (qty / 1000)).toFixed(2)} to buy ${(qty / 1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));




// 02. Greatest Common Divisor - GCD ////////////////////////////////////////////

function solve(num1, num2) {
    while (num2 != 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp
    }
    return num1
}

console.log(solve(15, 5));




// 03. Same Numbers //////////////////////////////////////////////////////////

function solve(input) {

    input = input.toString().split("").map(Number)
    let isSame = true;

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        let next = input[i + 1];
        if ( current !== next && next !== undefined) {
            isSame = false
        }
    }
    console.log(isSame);
    console.log(input.reduce((a, b) => a + b, 0)
    );
}
solve(1234);
solve(2222222);




// 04. Time to Walk ////////////////////////////////////////////////////////////

function solve(steps, footprint, speed1) {
    const speed = speed1 * 1000 / 3600;
    const distance = steps * footprint;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speed + rest;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
    const mins = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, "0");
    const secs = (time - hours * 3600 - mins * 60).toFixed(0).padStart(2, "0");


    return `${hours}:${mins}:${secs}`
}




// 05. Road Radar ////////////////////////////////////////////////////////////

function solve(speed, road) {
    let speedLimit = 0;
    switch (road) {
        case 'city':
            speedLimit = 50;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        default:
            break;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let difference = speed - speedLimit;
        let status;
        if (difference <= 20) {
            status = 'speeding'
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving'
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')




// 06. Cooking by Numbers ////////////////////////////////////////////////////

function solve(num, arg1, arg2, arg3, arg4, arg5) {
    num = +num;
    const commands = [arg1, arg2, arg3, arg4, arg5]
    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'chop':
                num /= 2
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3
                break;
            case 'fillet':
                num = 0.8 * num;
                break;
        }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')




// 07. Validity Checker ////////////////////////////////////////////////////

function solve(x1, y1, x2, y2) {

    function getResult(x1, y1, x2, y2) {
        const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        return Number.isInteger(distance) ? 'valid' : 'invalid';

    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${getResult(x1, y1, 0, 0)}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}`);
}
solve(3, 0, 0, 4);
console.log("----------------------")
solve(2, 1, 1, 1);




// 08. Words Uppercase ///////////////////////////////////////////////////////////

function solve(string) {
    let regex = /\w+/g;
    let matches = string.match(regex)
    let result = [];
    matches.forEach(el => {
      result.push(el.toUpperCase())
    })
    console.log(result.join(", "));
}

solve('Hi, how are you?')
solve('hello')