// 02.Emoji Detector //////////////////////////////////// Final Exam /// 04 April ///

function solve([input]) {
    let regex = /([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/g;
    let digitsRegex = /\d/g;
    let match = regex.exec(input)
    let coolThreshold = 1
    let digitsMatch = input.match(digitsRegex).map(Number)
    digitsMatch.forEach(element => {
        coolThreshold *= element
    });
    let object = {};
    while (match !== null) {
        let sum = 0;
        let lengthOfASCII = match.groups.word.split("")
        lengthOfASCII.forEach(ch => {
            sum += ch.charCodeAt()
        })
        object[match[0]] = sum;
        match = regex.exec(input)
    }
    let emojiCounter = Object.keys(object).length
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`)
    Object.keys(object).filter(key => object[key] > coolThreshold).forEach(element => {
        console.log(element)
    })
}
solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
])




// 02.Fancy Barcodes ///////////////////////////// Final Exam Gr 2 //// 04 April

function solve(input) {
    let regex = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
    let count = Number(input.shift());
    let regexDigits = /\d+/g;
    for (let i = 0; i < count; i++) {
        let match = regex.exec(input[i])
        let prGroup = "";

        if (match == null) {
            console.log("Invalid barcode");
        } else {
            let match2 = match.groups.product.match(regexDigits)
            if (match2 == null) {
                prGroup = "00";
            } else {
                prGroup = match2.join("")
            }
            console.log(`Product group: ${prGroup}`);
        }
        match = regex.exec(input[i])
    }
}
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
])




// 02. Mirror words ///////////////// Final EXam Retake ////// 10 April

function solve([input]) {
    let regex = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    let countWords = input.match(regex);
    if (countWords == null) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${countWords.length} word pairs found!`);
    }
    let matches = regex.exec(input)
    let list = [];
    while (matches !== null) {
        if (matches.groups.word1 == matches.groups.word2.split("").reverse().join("")) {
            list.push(`${matches.groups.word1} <=> ${matches.groups.word2}`)
        }
        matches = regex.exec(input)
    }
    if (list.length > 0) {
        console.log(`The mirror words are:\n${list.join(", ")}`);
    } else {
        console.log(`No mirror words!`);
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
  ])




// 02. Destination Mapper ///////////////////////////// Final Exam //// 09 Agust /////

function solve(input) {
    let regexp = /(\/|=)(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let = dest = [];
    let travelPoints = 0;
    let match = regexp.exec(input)
    while (match != null) {
        dest.push(match.groups.destination)
        travelPoints+= match.groups.destination.length
        match = regexp.exec(input)
    }
    console.log(`Destinations: ${dest.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i= ')




// 02. Ad Astra //////////////////////////// Final Exam Retake /////////// 15 August///

function solve(input) {
    let regex = /([\|#])(?<product>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<nutrition>\d{1,4})\1/g;
    let totalCalories = 0;
    let match = regex.exec(input)
    let list = []
    while (match != null) {
        let str = (`Item: ${match.groups.product}, Best before: ${match.groups.date}, Nutrition: ${match.groups.nutrition}`)
        // console.log(`Item: ${match.groups.product}, Best before: ${match.groups.date}, Nutrition: ${match.groups.nutrition}`);
        totalCalories += Number(match.groups.nutrition)
        list.push(str)
        match = regex.exec(input)
    }
    totalCalories = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${totalCalories} days!`);
    if (list.length !== 0) {
        list.forEach(string => {
            console.log(string);
        })
    }
}
solve('$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|')