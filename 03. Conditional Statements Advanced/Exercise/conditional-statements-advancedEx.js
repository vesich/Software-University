//// 01. Cinema

function cinema(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let col = Number(arg3);
    let incomes

    switch (type) {
        case "Premiere":
            incomes = rows * col * 12;
            break;
        case "Normal":
            incomes = rows * col * 7.5;
            break;
        case "Discount":
            incomes = rows * col * 5;
            break;
        default:
            console.log("error");
            break;
    }
    console.log(`${incomes.toFixed(2)} leva`);
}




//// 02. Summer Outfit

function summerOutfit(arg1, arg2) {
    let temp = Number(arg1);
    let time = arg2;
    let outfit
    let shoes

    switch (time) {
        case "Morning":
            if (temp >= 10 && temp <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (temp > 18 && temp <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temp >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (temp >= 10 && temp <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temp > 18 && temp <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (temp >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (temp >= 10 && temp <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temp > 18 && temp <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (temp >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;

        default:
            break;
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}




//// 03. New House

function neli(arg1, arg2, arg3) {
    let flower = arg1;
    let count = Number(arg2);
    let budget = Number(arg3);
    let totalPrice

    switch (flower) {
        case "Roses":
            totalPrice = count * 5;
            if (count > 80) {
                totalPrice = totalPrice * 0.9;
            }
            break;
        case "Dahlias":
            totalPrice = count * 3.8;
            if (count > 90) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Tulips":
            totalPrice = count * 2.8;
            if (count > 80) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Narcissus":
            totalPrice = count * 3;
            if (count < 120) {
                totalPrice = totalPrice * 1.15;
            }
            break;
        case "Gladiolus":
            totalPrice = count * 2.5;
            if (count < 80) {
                totalPrice = totalPrice * 1.2;
            }
            break;
    }
    let difference = (Math.abs(budget - totalPrice)).toFixed(2);
    if (totalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${difference} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference} leva more.`);
    }
}




//// 04. Fishing Boat

function boat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fishers = Number(arg3);
    let price = 0
    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }
    if (fishers <= 6) {
        price = price * 0.9;
    } else if (fishers >= 7 && fishers <= 11) {
        price = price * 0.85;
    } else if (fishers > 12) {
        price = price * 0.75;
    }

    if (fishers % 2 == 0 && season != "Autumn") {
        price = price * 0.95;
    }

    let difference = (Math.abs(budget - price)).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${difference} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference} leva.`);
    }
}




//// 05. Journey

function vacation(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let moneySpent
    let destination
    let type

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            type = "Camp";
            moneySpent = 0.3 * budget;
        } else if (season === "winter") {
            type = "Hotel";
            moneySpent = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            type = "Camp";
            moneySpent = 0.4 * budget;
        } else if (season === "winter") {
            type = "Hotel";
            moneySpent = 0.8 * budget;
        }
    } else {
        destination = "Europe"
        moneySpent = 0.9 * budget;
        type = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${moneySpent.toFixed(2)}`);
}




//// 06. Operations Between Numbers

function operations(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;
    let result = 0
    let num = '';


    if (operator == "+") {
        result = n1 + n2;
        if (result % 2 == 0) {
            num = "even"
        } else {
            num = "odd"
        }
        console.log(`${n1} + ${n2} = ${result} - ${num}`);
    }
    else if (operator == "-") {
        result = n1 - n2;
        if (result % 2 == 0) {
            num = "even"
        } else {
            num = "odd"
        }
        console.log(`${n1} - ${n2} = ${result} - ${num}`);
    } else if (operator == "*") {
        result = n1 * n2;
        if (result % 2 == 0) {
            num = "even"
        } else {
            num = "odd"
        }
        console.log(`${n1} * ${n2} = ${result} - ${num}`);
    } else if (operator == "/") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = (n1 / n2).toFixed(2);
            console.log(`${n1} / ${n2} = ${result}`);
        }
    } else if (operator == "%") {
        if (n2 == 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }
}




//// 07. Hotel Room

function hotelRooms(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);
    let studio
    let apartment
    let studioAll
    let apartmentAll

    if (month == "May" || month == "October") {
        studio = 50;
        apartment = 65;
        if (nights > 14) {
            studio = studio * 0.7;
            apartment = apartment * 0.9;
        } else if (nights > 7) {
            studio = studio * 0.95;
        }
    } else if (month == "June" || month == "September") {
        studio = 75.20;
        apartment = 68.70;
        if (nights > 14) {
            studio = studio * 0.8;
            apartment = apartment * 0.9;
        }
    } else {
        studio = 76;
        apartment = 77;
        if (nights > 14) {
            apartment = apartment * 0.9;
        }
    }
    studioAll = (studio * nights).toFixed(2);
    apartmentAll = (apartment * nights).toFixed(2);

    console.log(`Apartment: ${apartmentAll} lv.`);
    console.log(`Studio: ${studioAll} lv.`);
}




//// 08. On Time for the Exam

function onTime(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);
    let examMinutes = Number(arg2);
    let arrivalHour = Number(arg3);
    let arrivalMinutes = Number(arg4);

    let totalExamMinutes = examHour * 60 + examMinutes;
    let totalArrivalMinutes = arrivalHour * 60 + arrivalMinutes;
    if (totalArrivalMinutes > totalExamMinutes) {
        let minutesLate = totalArrivalMinutes - totalExamMinutes;
        console.log('Late');
        if (minutesLate < 60) {
            console.log(`${minutesLate} minutes after the start`);
        } else {
            let hoursLate = Math.floor(minutesLate / 60);
            let minutesOnly = minutesLate % 60;
            if (minutesOnly < 10) {
                console.log(`${hoursLate}:0${minutesOnly} hours after the start`);
            } else {
                console.log(`${hoursLate}:${minutesOnly} hours after the start`);
            }
        }
    } else if (totalArrivalMinutes == totalExamMinutes) {
        console.log('On time');
    } else if (totalArrivalMinutes < totalExamMinutes) {
        let minutesBefore = totalExamMinutes - totalArrivalMinutes;
        if (minutesBefore <= 30) {
            console.log(`On time`);
        } else {
            console.log('Early');
        }

        if (minutesBefore < 60) {
            console.log(`${minutesBefore} minutes before the start`);
        } else {
            let hoursBefore = Math.floor(minutesBefore / 60);
            let minutesOnly = minutesBefore % 60;
            if (minutesOnly < 10) {
                console.log(`${hoursBefore}:0${minutesOnly} hours before the start`);
            } else {
                console.log(`${hoursBefore}:${minutesOnly} hours before the start`);
            }
        }
    }
}




//// 09. Volleyball

function volleyball(arg1, arg2, arg3) {
    let year = arg1;
    let p = Number(arg2);
    let h = Number(arg3);
    let gamesTotal

    gamesTotal = ((48 - h) * 3 / 4) + (p * 2 / 3) + h;
    if (year == "leap") {
        gamesTotal = gamesTotal * 1.15;
    }
    console.log(Math.floor(gamesTotal));
}