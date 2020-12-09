//// 01. Old Books

function solve(input1) {
    let wantedBook = input1[0];
    let nextBook = input1[1];
    let checkedBooks = 0;

    while (nextBook !== 'No More Books') {
        if (nextBook === wantedBook) {
            break;
        }
        checkedBooks++;
        nextBook = input1[checkedBooks + 1];
    }
    if (nextBook === wantedBook) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }
}




//// 02. Exam Preparation

function solve(input) {
    let index = 1;
    let badGrades = 0;
    let solvedExams = 0;
    let lastProblem = "";
    let sumGrades = 0;
    let isTired = false;
    let minBadGrades = Number(input[0]);
    let exam = input[index];
    while (exam !== 'Enough') {
        let grade = Number(input[index + 1]);

        if (grade <= 4) {
            badGrades++;
        }
        if (badGrades === minBadGrades) {
            isTired = true;
            break;
        }

        lastProblem = exam;
        sumGrades += grade;
        solvedExams++;
        index += 2;
        exam = input[index];
    }
    if (isTired === true) {
        console.log(`You need a break, ${minBadGrades} poor grades.`);
    } else {
        let averageScore = sumGrades / solvedExams;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${solvedExams}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}




//// 03. Vacation

function solve(input) {
    let vacationCost = Number(input[0]);
    let savedMoney = Number(input[1]);
    let days = 0;
    let spendDays = 0;
    let index = 2;
    let jessieAction = input[index];
    while (spendDays < 5 && savedMoney < vacationCost) {
        let actionMoney = Number(input[index + 1]);

        if (jessieAction === "spend") {
            spendDays++;
            savedMoney = Math.max(0, (savedMoney - actionMoney));
        } else if (jessieAction === "save") {
            savedMoney += actionMoney;
            spendDays = 0;
        }
        days++;
        index += 2;
        jessieAction = input[index];
    }
    if (savedMoney >= vacationCost) {
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(days)
    }
}




//// 04. Walking

function solve(input) {
    let steps = 0;
    let index = 0;
    let nextSteps = input[index];
    let target = 10000;

    while (nextSteps !== 'Going home' && nextSteps !== undefined) {
        steps += Number(nextSteps);
        index++;
        nextSteps = input[index];
    }

    if (nextSteps === 'Going home') {
        steps += Number(input[index + 1]);
    }

    if (steps >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - target} steps over the goal!`);
    } else {
        console.log(`${target - steps} more steps to reach goal.`);
    }
}
