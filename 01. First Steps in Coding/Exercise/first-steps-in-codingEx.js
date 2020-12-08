//// 01. USD to BGN

function convertor(usdInput) {
    let usd = Number(usdInput);
    let bgn = usd * 1.79549
    console.log(bgn);
}




//// 02. Radians to Degrees

function convertor(radianInput) {
    let radians = Number(radianInput);
    let degrees = (radians * 180) / Math.PI;
    console.log(degrees.toFixed(0))
}




//// 03. Deposit Calculator

function calculator(depositedMoney, months, interest) {
    let depositedAmount = Number(depositedMoney);
    let period = Number(months)
    let yearlyInterest = Number(interest / 100);
    let sum = depositedAmount + period * ((depositedAmount * yearlyInterest) / 12);
    console.log(sum);
}




//// 04. Vacation books list

function booksToRead(bookPage, ppHour, daysR) {
    let bookPages = Number(bookPage);
    let pagePerHour = Number(ppHour);
    let days = Number(daysR);
    let neededTime = (bookPages / pagePerHour) / days;
    console.log(neededTime);
}




//// 05. Birthday party

function birthday(eventRent) {
    let rent = Number(eventRent);
    let cakePrice = 0.2 * rent;
    let beverages = cakePrice - (0.45 * cakePrice);
    let animator = rent / 3;
    let totalSum = Number(rent + cakePrice + beverages + animator);
    console.log(totalSum);
}




//// 06. Charity Campaign

function charity(days, bakers, cakes, gophretti, pancakes) {
    let time = Number(days);
    let numberBakers = Number(bakers);
    let numberCakes = Number(cakes);
    let numberGo = Number(gophretti);
    let numberPan = Number(pancakes);
    let totalSumPerDay = ((numberCakes * 45) + (numberGo * 5.80) + (numberPan * 3.20)) * numberBakers;
    let sumWholePeriod = totalSumPerDay * time;
    let finalSum = sumWholePeriod - (sumWholePeriod / 8);
    console.log(finalSum);
}




//// 07. Fruit Market

function market(strawberries, bananaQuantity, orangeQuantity, raspberriesQuantity, strawberryQuantity) {
    let strawPrice = Number(strawberries);
    let bananaQ = Number(bananaQuantity);
    let orangeQ = Number(orangeQuantity);
    let raspbQ = Number(raspberriesQuantity);
    let strawQ = Number(strawberryQuantity);
    let raspbSum = (strawPrice / 2) * raspbQ;
    let orangeSum = ((strawPrice / 2) - (strawPrice / 2) * 0.40) * orangeQ;
    let bananaSum = (strawPrice / 2 - ((strawPrice / 2) * 0.8)) * bananaQ;
    let strawSum = strawPrice * strawQ;

    let totalSum = (raspbSum + orangeSum + bananaSum + strawSum);
    console.log(totalSum.toFixed(2));
}




//// 08. Fish Tank

function tank(length1, width1, heigth1, percentage1) {
    let length = Number(length1);
    let width = Number(width1);
    let heigth = Number(heigth1);
    let percentage = Number(percentage1);
    let capacity = (length * width * heigth) * 0.001
    let neededCapacity = capacity * (1 - (percentage / 100));

    console.log(neededCapacity);
}