//// 01. Furniture /////////////////////////////////////////////////////////////////////////

function solve(input) {
    let result = `Bought furniture:`
    let totalSum = 0
    for (let line of input) {
        let regex = />>(?<product>[A-Za-z]+)<<(?<price>\d+\.?\d*)\!(?<qty>\d+)/g;
        let match = regex.exec(line)
        if (match) {
            totalPrice = Number(match.groups.price) * Number(match.groups.qty)
            result += '\n' + match.groups.product
            totalSum += totalPrice
        }
    }
    console.log(result);
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])




//// 02. Race ////////////////////////////////////////////////////////////////////////////////

function solve(input) {
    let list = input.shift().split(", ")
    let object = {};
    list.forEach(person => {
        object[person] = 0;
    });
    for (let line of input) {
        let regexLetters = /[A-Za-z]/g;
        let matchName = line.match(regexLetters).join("")
        if (object.hasOwnProperty(matchName)) {
            let regexNums = /\d/g;
            let distance = line.match(regexNums).map(Number).reduce((a, b) => a + b);
            object[matchName] += distance
        }
    }
    let sorted = Object.entries(object).sort((a, b) => b[1] - a[1])
    sorted.pop()
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])




//// 03. SoftUni Bar Income /////////////////////////////////////////////////////////

function solve(input) {
    let totalIncome = 0;
    for (let line of input) {
        let regex = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<product>\w+)>([^\|\$\%\.]+)?\|(?<count>\d+)\|([^\|\$\%\.\d]+)?(?<price>\d+\.?\d*)\$/g;
        let match = regex.exec(line)
        if (match) {
            let total = Number(match.groups.count) * Number(match.groups.price)
            totalIncome+= +total;
            console.log(`${match.groups.name}: ${match.groups.product} - ${total.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)} `);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])