//// 01. Day of Week

function dayOFWeek(arg1) {
    let day = Number(arg1)
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error");
            break;
    }
}




//// 02. Weekend of Working Day

function days(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("Error");
            break;
    }
}
//// 03. Animal Type

function animals(animal) {
    switch (animal) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;
    }
}




//// 04. Personal Titles

function converter(arg1, arg2) {
    let age = Number(arg1);
    let gender = arg2;
    if (gender === "f") {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    } else {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    }
}




//// 05. Small Shop

function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let city = arg2;
    let quantity = Number(arg3)
    let totalMoney = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee": totalMoney = quantity * 0.5; break;
            case "water": totalMoney = quantity * 0.80; break;
            case "beer": totalMoney = quantity * 1.20; break;
            case "sweets": totalMoney = quantity * 1.45; break;
            case "peanuts": totalMoney = quantity * 1.60; break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": totalMoney = quantity * 0.4; break;
            case "water": totalMoney = quantity * 0.70; break;
            case "beer": totalMoney = quantity * 1.15; break;
            case "sweets": totalMoney = quantity * 1.3; break;
            case "peanuts": totalMoney = quantity * 1.5; break;
        }
    } else if (city === "Varna") {

        switch (product) {
            case "coffee": totalMoney = quantity * 0.45; break;
            case "water": totalMoney = quantity * 0.70; break;
            case "beer": totalMoney = quantity * 1.10; break;
            case "sweets": totalMoney = quantity * 1.35; break;
            case "peanuts": totalMoney = quantity * 1.55; break;
        }
    }
    console.log(totalMoney);
}




//// 06. Number in Range

function interval(arg1) {
    if (arg1 >= -100 && arg1 <= 100 && arg1 != 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}




//// 07. Working Hours

function workingHours(arg1, arg2) {
    let hours = Number(arg1);
    let days = arg2;

    if (hours >= 10 && hours < 18) {
        switch (days) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
        }
    } else {
        console.log("closed");
    }
}




//// 08. Cinema Ticket

function cinema(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(12);
            break;
        case "Wednesday":
        case "Thursday":
            console.log(14);
            break;
        case "Saturday":
        case "Sunday":
            console.log(16);
            break;
        default:
            console.log("error");
            break;
    }
}




//// 09. Fruit or Vegetable

function compare(arg1) {
    switch (arg1) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}




//// 10. Invalid Number

function isValid(arg1) {
    if (arg1 < 100 && arg1 != 0 || arg1 > 200) {
        console.log("invalid");
    }
}




//// 11. Fruit Shop

function fruitShop(arg1, arg2, arg3) {
    let product = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (product === "banana") {
                price = quantity * 2.5
            } else if (product === "apple") {
                price = quantity * 1.2;
            } else if (product === "orange") {
                price = quantity * 0.85;
            } else if (product === "grapefruit") {
                price = quantity * 1.45;
            } else if (product === "kiwi") {
                price = quantity * 2.7;
            } else if (product === "pineapple") {
                price = quantity * 5.5;
            } else if (product === "grapes") {
                price = quantity * 3.85;
            } else {
                console.log("error");
            }
            break;
        case "Saturday":
        case "Sunday":
            if (product === "banana") {
                price = quantity * 2.7
            } else if (product === "apple") {
                price = quantity * 1.25;
            } else if (product === "orange") {
                price = quantity * 0.9;
            } else if (product === "grapefruit") {
                price = quantity * 1.6;
            } else if (product === "kiwi") {
                price = quantity * 3;
            } else if (product === "pineapple") {
                price = quantity * 5.6;
            } else if (product === "grapes") {
                price = quantity * 4.2;
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
    if (price != 0) {
        console.log(price.toFixed(2));
    }
}




//// 12. Trade Commissions

function commissions(arg1, arg2) {
    let city = arg1;
    let sales = Number(arg2);
    let total = 0;

    switch (city) {
        case "Sofia":
            if (sales > 10000) {
                total = 0.12 * sales;
            } else if (sales > 1000 && sales <= 10000) {
                total = 0.08 * sales;
            } else if (sales > 500 && sales <= 1000) {
                total = 0.07 * sales;
            } else if (sales >= 0 && sales <= 500) {
                total = 0.05 * sales;
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sales > 10000) {
                total = 0.145 * sales;
            } else if (sales > 1000 && sales <= 10000) {
                total = 0.12 * sales;
            } else if (sales > 500 && sales <= 1000) {
                total = 0.08 * sales;
            } else if (sales >= 0 && sales <= 500) {
                total = 0.055 * sales;
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (sales > 10000) {
                total = 0.13 * sales;
            } else if (sales > 1000 && sales <= 10000) {
                total = 0.1 * sales;
            } else if (sales > 500 && sales <= 1000) {
                total = 0.075 * sales;
            } else if (sales >= 0 && sales <= 500) {
                total = 0.045 * sales;
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
            break;
    }
    if (total > 0) {
        console.log(total.toFixed(2));
    }
}




//// 13. Ski Trip

function hotel(arg1, arg2, arg3) {
    let days = Number(arg1);
    let room = arg2;
    let feedback = arg3;
    let price = 0;

    switch (room) {
        case "room for one person":
            price = (days - 1) * 18
            break;
        case "apartment":
            if (days < 10) {
                price = ((days - 1) * 25) * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = ((days - 1) * 25) * 0.65;
            } else if (days > 15) {
                price = ((days - 1) * 25) * 0.5;
            }
            break;
        case "president apartment":
            if (days < 10) {
                price = ((days - 1) * 35) * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = ((days - 1) * 35) * 0.85;
            } else if (days > 15) {
                price = ((days - 1) * 35) * 0.80;
            }
            break;
    }
    switch (feedback) {
        case "positive":
            price = 1.25 * price;
            break;
        case "negative":
            price = 0.9 * price;
            break;
    }
    console.log(price.toFixed(2));

}