//// 01. Numbers from 1 to 100

function solve() {
    for (i = 1; i <= 100; ++i) {
        console.log(i);
    }
}




//// 02. Numbers N...1

function solve(arg) {
    let n = Number(arg);
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}




//// 03. Numbers 1...N with Step 3

function oneToN(arg) {
    let n = Number(arg);

    for (let i = 1; i <= n; i += 3) {
        console.log(i)
    }
}




//// 04. Even Powers of 2

function oneToN(arg) {
    let n = Number(arg);
    for (let i = 0; i <= n; i += 2) {
        let result = Math.pow(2, i);
        console.log(result);
    }
}




//// 05. Character Sequence

function solve(arg) {
    let text = arg;
    for (i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
}




//// 06. Vowels Sum

function solve(arg) {
    let text = arg;
    let sum = 0;

    for (i = 0; i < text.length; i++) {
        let ch = text[i];
        switch (ch) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum);
}




//// 07. Sum of Numbers

function solve(arg) {
    let numText = arg + "";
    let sum = 0;

    for (let i = 0; i < numText.length; i++) {
        let num = Number(numText[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);
}




//// 08. Numbers, Divisible by 9

function solve(arg1, arg2) {
    let a = Number(arg1);
    let b = Number(arg2);
    let sum = 0;
    let print = "";

    for (let i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let z = a; z <= b; z++) {
        if (z % 9 === 0) {
            console.log(z);
        }
    }
}




//// 09. Clever Lilly

function lilly(arg1, arg2, arg3) {
    let age = Number(arg1);
    let washPrice = Number(arg2);
    let toyPrice = Number(arg3);
    let piggyBank = 0;
    let toysCount = 0;
    let lastCashGift = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toysCount += 1;
        } else {
            piggyBank += lastCashGift + 9;
            lastCashGift += 10;
        }
    }
    piggyBank += toysCount * toyPrice;

    if (piggyBank >= washPrice) {
        console.log(`Yes! ${(piggyBank - washPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washPrice - piggyBank).toFixed(2)}`);
    }
}