// //// 01. Clock

// function solve() {
//     for (let hour = 0; hour < 24; hour++) {
//         for (let min = 0; min < 60; min++) {
//             let h = hour;
//             let m = min;
//             console.log(h + ":" + m);
//         }
//     }
// }




// //// 02. Multiplication Table

// function solve() {
//     for (let i = 1; i <= 10; i++) {
//         for (let j = 1; j <= 10; j++) {
//             let product = i * j;
//             console.log(`${i} * ${j} = ${product}`);
//         }
//     }
// }




// // 03. Combinations

// function solve(input) {
//     let n = Number(input);
//     let count = 0;
//     for (let i = 0; i <= n; i++) {
//         for (let j = 0; j <= n; j++) {
//             for (let k = 0; k <= n; k++) {
//                 if (k + j + i == n) {
//                     count++;
//                 }
//             }
//         }
//     }
//     console.log(count)
// }
// solve(["5"])




// // 04. Sum of Two Numbers

// function solve(input) {

//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     let magicNum = Number(input[2]);
//     let isFound = false;
//     let counter = 0;
//     for (let i = a; i <= b; i++) {
//         for (let j = a; j <= b; j++) {
//             counter++;
//             if (i + j === magicNum) {
//                 console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
//                 isFound = true;
//                 break;
//             }
//         }
//         if (isFound) {
//             break;
//         }
//     }
//     if (!isFound) {
//         console.log(`${counter} combinations - neither equals ${magicNum}`);
//     }
// }




// 05. Traveling

function solve(input) {
    for (let i = 0; i < input.length; i++) {
        let dest = input[i];
        let minReqAmount = Number(input[i+1])
        let currentMoney = 0;
        for (let j = i+2; j < input.length ;j++) {
            currentMoney += Number(input[j])
            if (currentMoney >= minReqAmount) {
                console.log(`Going to ${dest}`);
                break;
            } 
        }
    }
}
solve([
    'Greece', '1000', '200',
    '200', '300', '100',
    '150', '240', 'Spain',
    '1200', '300', '500',
    '193', '423', 'End',
    ''
])

// 06. Building

// function solve(input) {

//     let floorCount = Number(input[0]);
//     let apartmentCount = Number(input[1]);

//     for (let floor = floorCount; floor > 0; floor--) {
//         let result = "";
//         for (let a = 0; a < apartmentCount; a++) {
//             if (floor === floorCount) {
//                 result += "L" + floor + a + " ";
//             } else if (floor % 2 === 0) {
//                 result += "O" + floor + a + " ";
//             } else {
//                 result += "A" + floor + a + " ";
//             }
//         }
//         console.log(result);
//     }
// }




// 07. Cinema Tickets


// 09. Tournament of Christmas