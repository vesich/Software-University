//// 01. Excellent Result

function isExcellent(arg1) {
    let grade = Number(arg1);
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}




//// 02. Greater Number

function isGreater(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);

    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}




//// 03. Even or Odd

function solve(arg1) {
    let num1 = Number(arg1);
    if (num1 % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}




//// 04. Number 100...200

function test(arg1) {
    let num1 = Number(arg1);
    if (num1 < 100) {
        console.log("Less than 100");
    } else if (num1 >= 100 && num1 <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}




//// 05. Password Guess

function passCheck(arg1) {
    if (arg1 === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}




//// 06. Area of Figures

function figureArea(arg1, arg2, arg3) {
    let area = 0;
    if (arg1 === "square") {
        let a = Number(arg2);
        area = a * a;
        console.log(area.toFixed(3));
    } else if (arg1 === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        area = a * b;
        console.log(area.toFixed(3));
    } else if (arg1 === "circle") {
        let r = Number(arg2);
        area = Math.PI * r * r;
        console.log(area.toFixed(3));
    } else if (arg1 === "triangle") {
        let a = Number(arg2);
        let heightA = Number(arg3);
        area = (a * heightA) / 2;
        console.log(area.toFixed(3));
    }
}




//// 07. Toy Shop

function toyStore(arg1, arg2, arg3, arg4, arg5, arg6) {

    let vacationPrice = Number(arg1);
    let puzzleCount = Number(arg2);
    let talkingDollCount = Number(arg3);
    let teddyBearCount = Number(arg4);
    let minionCount = Number(arg5);
    let truckCount = Number(arg6);

    let puzzlePrice = puzzleCount * 2.6;
    let talkingDollPrice = talkingDollCount * 3;
    let teddyBearPrice = teddyBearCount * 4.1;
    let minionPrice = minionCount * 8.2;
    let truckPrice = truckCount * 2;

    let totalPrice = puzzlePrice + talkingDollPrice + teddyBearPrice + minionPrice + truckPrice;
    let totalCount = puzzleCount + talkingDollCount + teddyBearCount + minionCount + truckCount;

    if (totalCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    let finalPrice = totalPrice * 0.9

    if (finalPrice >= vacationPrice) {
        let moneyLeft = finalPrice - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = vacationPrice - finalPrice;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}