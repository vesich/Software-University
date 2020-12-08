//// 01. Numbers Ending in 7

function numbers() {
    for (let i = 7; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}




//// 02. Multiplication Table

function digits(arg1) {
    let n = Number(arg1);
    let sum

    for (let i = 1; i <= 10; i++) {
        sum = i * n;
        console.log(`${i} * ${n} = ${sum}`);
    }
}




//// 03. Leap Year

function years(arg1, arg2) {
    let leapYear = Number(arg1);
    let randomYear = Number(arg2);

    for (let i = leapYear; i <= randomYear; i += 4) {
        console.log(i);
    }
}




//// 04. Factorial

function fact(arg1) {
    let n = Number(arg1);
    let total = 1;

    for (let i = 2; i <= n; i++) {
        total = total * i;
    }
    console.log(total)
}




//// 05. Count the Words

function fact(arg1) {
    let message = arg1;
    let spaces = 0;
    let words
    for (let i = 0; i < message.length; i++) {
        let symbol = message[i];
        if (symbol === " ") {
            spaces += 1;
        }
    }
    words = spaces + 1;

    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log(`The message was send successfully!`);
    }
}




//// 06. Histogram

function histogram(a) {

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let n = a[0];

    for (i = 1; i <= n; i++) {
        if (a[i] < 200) {
            p1++;
        } else if (a[i] >= 200 && a[i] <= 399) {
            p2++;
        } else if (a[i] >= 400 && a[i] <= 599) {
            p3++;
        } else if (a[i] >= 600 && a[i] <= 799) {
            p4++;
        } else if (a[i] >= 800) {
            p5++;
        }
    }
    p1 = (p1 / n) * 100;
    p2 = (p2 / n) * 100;
    p3 = (p3 / n) * 100;
    p4 = (p4 / n) * 100;
    p5 = (p5 / n) * 100;
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}




//// 07. Divide Without Remainder

function delenie(a) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let n = a[0];

    for (i = 1; i <= n; i++) {
        if (a[i] % 2 === 0) {
            p1++;
        }
        if (a[i] % 3 === 0) {
            p2++;
        }
        if (a[i] % 4 === 0) {
            p3++;
        }
    }

    let p1Sum = ((p1 / n) * 100).toFixed(2);
    let p2Sum = ((p2 / n) * 100).toFixed(2);
    let p3Sum = ((p3 / n) * 100).toFixed(2);

    console.log(`${p1Sum}%`);
    console.log(`${p2Sum}%`);
    console.log(`${p3Sum}%`);
}




//// 08. Salary

function theSalary(a) {
    let tabs = a[0];
    let salary = a[1];

    for (let i = 2; i <= a.length; i++) {
        if (a[i] === "Facebook") {
            salary -= 150;
        } else if (a[i] === "Instagram") {
            salary -= 100;
        } else if (a[i] === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            i = a.length + 1;
        }
        if (i === a.length) {
            console.log(Math.floor(salary));
        }
    }
}




//// 09. Min Number

function fn(a) {
    a = a.slice(1, a.length);
    console.log(Math.min.apply(Math, a));
}