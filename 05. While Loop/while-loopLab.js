//// 01. Read Text

function solve(input) {
    let index = 0;
    let words = input[index];
    index++;
    while (true) {
        if (words === "Stop") {
            break;
        }
        console.log(words);
        words = input[index];
        index++;
    }
}




//// 02. Password

function solve(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let tempPassword = input[index];
    while (tempPassword !== password) {
        tempPassword = input[index];
        index++;
    }
    console.log("Welcome " + username + "!");
}




//// 03. Sum Numbers

function solve(input) {
    let index = 0;
    let neededSum = Number(input[index]);
    index++;
    let sum = 0;
    while (sum < neededSum) {
        let currentNumber = Number(input[index]);
        index++;
        sum += currentNumber;
    }
    console.log(sum);
}




//// 04. Sequence 2k+1

function solve(input) {
    let n = Number(input[0]);
    let k = 1;
    while (k <= n) {
        console.log(k);
        k = k * 2 + 1;
    }
}




//// 05. Account Balance

function solve(input) {
    let totalAmount = 0;
    let index = 0;
    let command = input[index];
    index++;
    while (command !== "NoMoreMoney") {
        let currentIncome = Number(command);
        if (currentIncome < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + currentIncome.toFixed(2));
        totalAmount += currentIncome;
        command = input[index];
        index++;
    }
    console.log("Total: " + totalAmount.toFixed(2));
}




//// 06. Max Number

function solve(input) {
    let index = 0;
    let data = input[index];
    index++;
    let maxNumber = Number(input[0])
    while (data !== "Stop") {
        let currentNum = Number(data);
        if (currentNum > maxNumber) {
            maxNumber = currentNum
        }
        data = input[index];
        index++;
    }
    console.log(maxNumber);
}




//// 07. Min Number

function solve(input) {
    let index = 0;
    let data = input[index];
    index++;
    let minNumber = Number(input[0])
    while (data !== "Stop") {
        let currentNum = Number(data);
        if (currentNum < minNumber) {
            minNumber = currentNum
        }
        data = input[index];
        index++;
    }
    console.log(minNumber);
}




//// 08. Graduation pt.2

function solve(input) {

    let index = 0;
    let name = input[index];
    index++;
    let counter = 1;
    let fails = 0;
    let averageGrade = 0;
    let isExcluded = false;
    while (counter <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            fails++;
            if (fails == 2) {
                console.log(`${name} has been excluded at ${counter} grade`);
                isExcluded = true;
                break;
            }
            continue;
        }
        averageGrade += grade;
        counter++;
    }
    if (!isExcluded) {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}




//// 09. Moving

function solve(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let availableSpace = width * length * heigth;

    let counter = 3
    let newBoxes = 0;
    let diff = 0;
    while (input[counter] != "Done") {
        let currentBoxes = Number(input[counter]);
        newBoxes += currentBoxes;
        diff = availableSpace - newBoxes
        if (diff < 0) {
            console.log(`No more free space! You need ${Math.abs(diff)} Cubic meters more.`)
            break;
        }
        counter++
    }
    if (input[counter] == "Done") {
        console.log(`${diff} Cubic meters left.`)
    }
}
solve(['10', '10', '2', '20', '20', '20', '20', '122'])
