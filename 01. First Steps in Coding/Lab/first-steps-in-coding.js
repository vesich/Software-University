//// 01. Hello Softuni

function helloSoftUni() {
    console.log("Hello SoftUni");
}




//// 02. Nums 1...10

function nums1To10() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}



//// 03. Square Area

function squareArea(input) {
    let a = Number(input);
    let area = a * a;

    console.log(area);
}




//// 04. Inches to Centimeters

function centToDec(input) {
    let a = Number(input);
    let b = a * 2.54

    console.log(b);
}



//// 05. Greeting by Name

function nameInput(input) {
    console.log(`Hello, ${input}!`);
}




//// 06. Concatenate Data

function concatenateData(fName, lName, age, town) {
    console.log(`You are ${fName} ${lName}, a ${age}-years old person from ${town}.`);
}




//// 07. Projects Creation

function projectCreation(name, projectQ) {
    let projectQuantity = Number(projectQ);
    let hoursNeeded = projectQuantity * 3;
    console.log(`The architect ${name} will need ${hoursNeeded} hours to complete ${projectQuantity} project/s.`)
}




//// 08. Pet Shop

function solve(arg1, arg2) {
    let dogsCount = Number(arg1);
    let restOfAnimals = Number(arg2);
    let total = dogsCount * 2.5 + restOfAnimals * 4;
    console.log(`${total} lv`);
}




//// 09. Yard Greening

function solve(arg1) {
    let squareM = Number(arg1);
    let price = (squareM * 7.61) * 0.82;
    let rest = (squareM * 7.61) * 0.18;
    console.log(`The final price is: ${price.toFixed(2)} lv.`);
    console.log(`The discount is: ${rest.toFixed(2)} lv.`);
}