// 01. Activation keys /////////////////////////////     Gr 01          04 April 

function solve(input) {
    let string = input.shift();
    let command = input.shift();
    while (command !== "Generate") {
        let tokens = command.split(">>>")
        switch (tokens[0]) {
            case "Contains":
                let substr = tokens[1]
                if (string.includes(substr)) {
                    console.log(`${string} contains ${substr}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case "Flip":
                let startInd = Number(tokens[2]);
                let endInd = Number(tokens[3]);
                if (tokens[1] == "Upper") {
                    string = string.split("");
                    let newOne = string.slice(startInd, endInd).join("").toUpperCase()
                    string = string.join("")
                    string = string.substring(0, startInd).concat(newOne).concat(string.substring(endInd))
                } else {
                    string = string.split("");
                    let newOne = string.slice(startInd, endInd).join("").toLowerCase()
                    string = string.join("")
                    string = string.substring(0, startInd).concat(newOne).concat(string.substring(endInd))
                }
                console.log(string);
                break;
            case "Slice":
                let startInd2 = Number(tokens[1]);
                let endInd2 = Number(tokens[2])
                string = string.substring(0, startInd2).concat(string.substring(endInd2))
                console.log(string);
                break;
        }
        command = input.shift();
    }
    if (command == "Generate") {
        console.log(`Your activation key is: ${string}`);
    }
}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])




// 01. Password Reset /////////////////////////////////////    Gr 2        04 April

function solve(input) {
    let str = input.shift();
    let command = input.shift();
    while (command !== "Done") {
        if (command.includes("TakeOdd")) {
            let newString = "";
            for (let i = 1; i < str.length; i += 2) {
                newString += str[i]
            }
            str = newString
            console.log(str);
        } else if (command.includes("Cut")) {
            command = command.split(" ");
            let ind = Number(command[1]);
            let length = Number(command[2]);
            str = str.substring(0, ind).concat(str.substring(ind + length))
            console.log(str);
        } else if (command.includes("Substitute")) {
            command = command.split(" ");
            let subStr = command[1];
            let substitute = command[2];

            if (str.includes(subStr)) {
                str = str.split(subStr).join(substitute)
                console.log(str);
            } else {
                console.log("Nothing to replace!");
            }
        }
        command = input.shift();
    }
    if (command == "Done") {
        console.log(`Your password is: ${str}`);
    }
}
solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! .!.',
    'Done'])




// 01. Secret Chat /////////////////////////////////// Final Exam Retake /// 10 April

function solve(input) {
    let str = input.shift();
    for (let line of input) {
        if (line == "Reveal") {
            console.log(`You have a new text message: ${str}`);
            break;
        } else {
            line = line.split(":|:")
            if (line.includes("InsertSpace")) {
                let ind = Number(line[1])
                str = str.split("")
                str.splice(ind, 0, " ");
                str = str.join("")
                console.log(str);
            } else if (line.includes("Reverse")) {
                let substr = line[1]
                if (str.includes(substr)) {
                    let indOfSub = str.indexOf(substr)
                    let subLength = substr.length;
                    str = str.substring(0, indOfSub).concat(str.substring(indOfSub + subLength))
                    substr = substr.split("").reverse().join("")
                    str = str.concat(substr)
                    console.log(str);
                } else {
                    console.log('error');
                }
            } else if (line.includes("ChangeAll")) {
                let substring2 = line[1]
                let replacement = line[2]
                if (str.includes(substring2)) {
                    str = str.split(substring2).join(replacement)
                    console.log(str);
                }
            }
        }
    }
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])




// 01. World Tour ////////////////////// ////// Final Exam ///////// 09 August

function solve(input) {
    let str = input.shift();
    for (let line of input) {
        if (line.includes("Add Stop")) {
            line = line.split(":");
            let ind = Number(line[1]);
            let string = line[2];
            if (str.length > ind) {
                str = str.split("");
                str.splice(ind, 0, string)
                str = str.join("")
                console.log(str);
            }
        } else if (line.includes("Remove")) {
            line = line.split(":");
            let startInd = Number(line[1]);
            let endInd = Number(line[2]);
            if (startInd < str.length && endInd < str.length) {
                str = str.substring(0, startInd).concat(str.substring(endInd + 1))
                console.log(str);
            }
        } else if (line.includes("Switch")) {
            line = line.split(":")
            let oldString = line[1];
            let newStr = line[2];
            if (str.includes(oldString)) {
                str = str.split(oldString).join(newStr)
                console.log(str);
            }
        } else if (line == "Travel") {
            console.log(`Ready for world tour! Planned stops: ${str}`);
            break;
        }
    }
}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])




//  01. The Imitation Game ////////////// FINAL EXAM RETAKE ///////////// 15 August

function solve(input) {
    let str = input.shift();

    for (let line of input) {
        line = line.split("|")
        if (line.includes("Move")) {
            let numOfLett = Number(line[1]);   //3
            let newStr = str.substring(numOfLett).concat(str.substring(0, numOfLett))
            str = newStr
        } else if (line.includes("Insert")) {
            let ind = Number(line[1]);
            let value = line[2]
            str = str.split("");
            str.splice(ind, 0, value)
            str = str.join("")
        } else if (line.includes("ChangeAll")) {
            let substr = line[1];
            let replacement = line[2]
            if (str.includes(substr)) {
                str = str.split(substr).join(replacement);
            }
        } else if (line.includes("Decode")) {
            console.log(`The decrypted message is: ${str}`);
            break;
        }
    }
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])