//// 01. Sum Seconds

function solution(arg1, arg2, arg3) {
    let timeFirst = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThird = Number(arg3);
    let totalTime = timeFirst + timeSecond + timeThird;
    let timeMin = Math.floor(totalTime / 60);
    let timeSec = totalTime % 60;

    if (timeSec < 10) {
        console.log(`${timeMin}:0${timeSec}`);
    } else {
        console.log(`${timeMin}:${timeSec}`);
    }
}




//// 02. Bonus Score

function solution(arg1) {
    let initialNumber = Number(arg1);
    let bonusPoints = 0;

    if (initialNumber <= 100) {
        bonusPoints += 5;
    } else if (initialNumber > 1000) {
        bonusPoints += initialNumber * 0.10;
    } else if (initialNumber > 100) {
        bonusPoints += initialNumber * 0.20;
    }
    if ((initialNumber % 2) === 0) {
        bonusPoints += 1;
    } else {
        let lastDigit = initialNumber % 10;

        if (lastDigit === 5) {
            bonusPoints += 2;
        }
    }
    console.log(bonusPoints);
    console.log(bonusPoints + initialNumber);
}




//// 03. Speed Info

function solution(arg1) {
    let speed = Number(arg1);

    if (speed <= 10) {
        console.log("slow");
    } else if (speed <= 50) {
        console.log("average");
    } else if (speed <= 150) {
        console.log("fast");
    } else if (speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}




//// 04. Metric Converter

function converter(arg1, arg2, arg3) {
    let num = Number(arg1)
    if (arg2 === "m" && arg3 === "cm") {
        let sum = num * 100
        console.log(`${sum.toFixed(3)}`)
    } else if (arg2 === "m" && arg3 === "mm") {
        let sum = num * 1000;
        console.log(`${sum.toFixed(3)}`)
    } else if (arg2 === "cm" && arg3 === "m") {
        let sum = num / 100;
        console.log(`${sum.toFixed(3)}`)
    } else if (arg2 === "cm" && arg3 === "mm") {
        let sum = num * 10;
        console.log(`${sum.toFixed(3)}`)
    } else if (arg2 === "mm" && arg3 === "m") {
        let sum = num / 1000;
        console.log(`${sum.toFixed(3)}`)
    } else if (arg2 === "mm" && arg3 === "cm") {
        let sum = num / 10
        console.log(`${sum.toFixed(3)}`)
    }
}




//// 05. Time + 15 Minutes

function time(arg1, arg2) {
    let startHours = Number(arg1);
    let startMinutes = Number(arg2) + 15;
    let timeInMin = startHours * 60 + startMinutes;
    let finalHours = Math.floor(timeInMin / 60)
    let finalMinutes = timeInMin % 60

    if (finalHours >= 24) {
        finalHours -= 24;
    }
    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`)
    }
}




//// 06. Godzilla vs. Kong

function solution(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let people = Number(arg2);
    let clothing = Number(arg3);
    let decor = budget * 0.10;
    let expenses = people * clothing;

    if (people > 150) {
        expenses = expenses * 0.9;
    }
    let totalExpenses = decor + expenses;
    if (budget >= totalExpenses) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`);
    }
}




//// 07. World Swimming Record

function swimming(arg1, arg2, arg3) {
    let record = Number(arg1);
    let distance = Number(arg2);
    let timeForM = Number(arg3);
    let delay = (Math.floor(distance / 15) * 12.5);
    let totalTime = (distance * timeForM) + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}
