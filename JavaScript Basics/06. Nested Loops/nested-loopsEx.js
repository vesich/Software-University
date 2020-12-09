//// 01. Number Pyramid

function solve(input) {
    let maxNumber = Number(input[0]);
    let currentNumber = 1;
    let isFinished = false;
    for (let row = 1; row <= maxNumber; row++) {
        let rowNumbers = "";
        for (let number = 1; number <= row; number++) {
            if (currentNumber > maxNumber) {
                isFinished = true;
                break;
            }
            rowNumbers += `${currentNumber} `;
            currentNumber++;
        }
        console.log(rowNumbers);
        if (isFinished === true) {
            break;
        }
    }
}




//// 02. Equal Sums Even Odd Position

function solve(inputData) {
    let startNumber = Number(inputData[0]);
    let endNumber = Number(inputData[1]);
    let output = "";
    for (let number = startNumber; number <= endNumber; number++) {
        let numberAsString = number + "";
        let oddSum = 0;
        let evenSum = 0;
        for (let index = 0; index < numberAsString.length; index++) {
            let digit = Number(numberAsString[index]);
            if (index % 2 === 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if (evenSum === oddSum) {
            output += number + " ";
        }
    }
    console.log(output);
}




//// 03. Sum Prime Non Prime


//// 04. Train The Trainers

function solve(inputData) {

    let totalJuryCount = inputData[0];
    let index = 1;
    let totalAverageResults = 0;
    let totalPresentations = 0;
    let presentation = inputData[index];
    while (presentation !== "Finish") {
        let totalJuryResult = 0;
        for (let jury = 1; jury <= totalJuryCount; jury++) {
            index++;
            totalJuryResult += Number(inputData[index]);
        }
        let average = totalJuryResult / totalJuryCount;
        console.log(`${presentation} - ${average.toFixed(2)}.`);
        totalAverageResults += average;
        totalPresentations++;
        index++;
        presentation = inputData[index];
    }
    let totalAverage = totalAverageResults / totalPresentations;
    console.log(`Student's final assessment is ${totalAverage.toFixed(2)}.`);
}




//// 05. Special Numbers
