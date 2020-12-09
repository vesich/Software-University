//// 01. Clock

function solve() {
    for (let hour = 0; hour < 24; hour++) {
        for (let min = 0; min < 60; min++) {
            let h = hour;
            let m = min;
            console.log(h + ":" + m);
        }
    }
}




//// 02. Multiplication Table

function solve() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let product = i * j;
            console.log(`${i} * ${j} = ${product}`);
        }
    }
}




//// 03. Combinations


//// 04. Sum of Two Numbers

function solve(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false;
    let counter = 0;
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            counter++;
            if (i + j === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}




//// 05. Traveling



//// 06. Building

function solve(input) {

    let floorCount = Number(input[0]);
    let apartmentCount = Number(input[1]);

    for (let floor = floorCount; floor > 0; floor--) {
        let result = "";
        for (let a = 0; a < apartmentCount; a++) {
            if (floor === floorCount) {
                result += "L" + floor + a + " ";
            } else if (floor % 2 === 0) {
                result += "O" + floor + a + " ";
            } else {
                result += "A" + floor + a + " ";
            }
        }
        console.log(result);
    }
}




//// 07. Cinema Tickets


//// 09. Tournament of Christmas