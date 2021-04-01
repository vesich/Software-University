// 01. Even Position Elements ///////////////////////////////////////////

function solve(input) {
    let result = [];
    for (let i = 0; i < input.length; i += 2) {
        result.push(input[i])
    }
    console.log(result.join(" "));
}

solve(['20', '30', '40', '50', '60'])
solve(['5', '10'])




// 03. Sum First Last

function solve(input) {

    let result = Number(input.pop()) + Number(input.shift());
    console.log(result);
}

solve(['20', '30', '40'] )
solve(['5', '10'])




// 04. Negative / Positive Numbers /////////////////////////////////

function solve(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            newArr.unshift(input[i])
        } else {
            newArr.push(input[i])
        }
    }
    newArr.forEach(el => {
        console.log(el);
    })
}

solve([7, -2, 8, 9])
solve([3, -2, 0, -1])




// 05. Smallest Two Numbers /////////////////////////////////////////

function solve(input) {
    return input
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(" ")
}

console.log(solve([30, 15, 50, 5]));
console.log('--------------------------------------');
console.log(solve([3, 0, 10, 4, 7, 3]));



// 06. Bigger Half ///////////////////////////////////////////////////

function solve(input) {
    let bigger = input.sort((a, b) => a - b).slice(input.length/2)
    return bigger
}
solve([4, 7, 2, 5])
solve([3, 19, 14, 19, 6])




// 07. Piece of Pie ///////////////////////////////////////////////////

function solve(input, word1, word2) {
let newArr = [];
    if (input.includes(word1) && input.includes(word2)) {
        let ind = input.indexOf(word1);
        let ind2 = input.indexOf(word2);
        newArr = input.slice(ind, ind2 + 1)
    }
   return newArr;
}

solve(['Apple Crisp', 

'Mississippi Mud Pie', 

'Pot Pie', 

'Steak and Cheese Pie', 

'Butter Chicken Pie', 

'Smoked Fish Pie'], 

'Pot Pie', 

'Smoked Fish Pie' )




// 08. Process Odd Positions ////////////////////////////////////////////

function solve(input) {
    let newArr = []
    for (let i = 1; i < input.length; i += 2) {
        newArr.push(input[i])
    }
    return newArr.map(x => x * 2).reverse().join(" ");
}

solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])




// NESTED ARRAYS

// 09. Biggest Element ////////////////////////////////////////////////////

function solve(input) {
    let newArr = [];
    input.forEach(array => {
        newArr.push(array.sort((a, b) => b - a).shift())
    });
    return newArr.sort((a, b) => b - a).shift()
}

console.log(solve([[3, 5, 7, 12], 

    [-1, 4, 33, 2], 

    [8, 3, 0, 4]] ))




// 10. Diagonal Sums ////////////////////////////////////////////////

function solve(matrix) {
    let mainDiagonal = 0;
    let secDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i]
        secDiagonal += matrix[i][matrix.length - i - 1];
    }
    console.log(mainDiagonal, secDiagonal);
}

solve([[20, 40],

[10, 60]])

solve([[3, 5, 17],

[-1, 7, 14],

[1, -8, 89]])




