// 01. Match Full Name /////////////////////////////////////////////////////////

function solve(input) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    input.forEach(line => {
        let match = line.match(regex)
        if (match) {
            console.log(match.join(" "));
        }
    })
}
solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
  ])




// 02. Match Phone Number //////////////////////////////////////////////////////

function solve(input) {
let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
let match = input[0].match(regex);
console.log(match.join(", "));
}
solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ])




// 03. Match Dates //////////////////////////////////////////////////////////////

function solve([input]) {
    let regex = /\b(?<day>\d{2})([-\.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let match;
    while ((match = regex.exec(input)) != null) {
        let day = match.groups.day;
        let month = match.groups.month;
        let year = match.groups.year;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}
solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
])



