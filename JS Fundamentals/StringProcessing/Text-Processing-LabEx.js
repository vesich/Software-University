// /////////////////////         LAB         /////////////////////////////////////

//// 01. Print Characters 

// function solve(input) {
//     for (let x of input) {
//         console.log(x);
//     }
// }
// solve('AWord')




//// 02. Substring ///////////////////////////////////////////////////////////

// function solve(str, n1, n2) {
// console.log(str.substring(n1, n1 + n2));

// }
// solve("ASentance", 1, 8)




//// 03. Censored Words  //////////////////////////////////////////////////////

// function solve(input, replaced) {
//     while (input.includes(replaced)) {
//         input = input.replace(replaced, "*".repeat(replaced.length))
//     }
//     console.log(input);
// }
// solve("A small sentence with  small some words", "small")

///////////////////////////////////////////////////////////////////

// function solve(text, word) {
//     let found = text.indexOf(word);

//     while (found != -1) {
//         text = text.replace(word, "*".repeat(word.length));
//         found = text.indexOf(word)
//     }
//     console.log(text);
//  }
//  solve("A small sentence with some smaller words", "small")




//// 04. Count String Occurrences

// function solve(input, word) {
//     let list = input.split(" ");
//     let count = 0;
//     for (let i = 0; i < list.length; i++) {
//         if (list[i] == word) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// solve("This is a word and it also is a sentence", "is");


// //////////////////////////////////   Exercises  //////////////////////////////

//// 01. Reveal Words //

// function solve(word, sentence) {
//     let words = word.split(", ");
//     let list = sentence.split(" ");
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].startsWith("*")) {
//            for (let word of words) {
//                if (word.length == list[i].length) {
//                    list[i] = word
//                }
//            }
//         }
//     }
//     console.log(list.join(" "));
// }
// solve('great, learning', 
// 'softuni is ***** place for ******** new programming  ***** languages' )




//// 02. Modern Times of #(HashTag)   ///////////////////////////////////////////

// function solve(string) {
//     string = string.split(" ");
//     for (let word of string) {
//         if (word[0] == "#" && word.length > 1) {
//             let isTrue = true;
//             word = word.slice(1);
//             for (let c of word) {
//                 c = c.charCodeAt();
//                 if (c < 65 || c > 90 && c < 97 || c > 122) {
//                     isTrue = false;
//                     break;
//                 }
//             }
//             if (isTrue) { console.log(word); }
//         }
//     }
// }
// solve('Now #days #sci4al everyone uses # to tag a word in #socialMedia')




//// 03. Extract File //////////////////////////////////////////////////////

// function solve(str){
//     str = str.slice(str.lastIndexOf("\\") + 1);
//     let fileName = str.slice(0, str.lastIndexOf("."))
//     let fileExtension = str.slice(str.lastIndexOf(".") +1)
// console.log(`File name: ${fileName}`);
// console.log(`File extension: ${fileExtension}`);
// }
// solve('C:\\Internal\\training-internal\\template.bak.pptx') 

//////////////////////////////////////////////////////////////////////////////////////

// function solve(str){
//     let fileName = str.substring(str.lastIndexOf("\\") +1, str.lastIndexOf("."))
//     let fileExtension = str.substring(str.lastIndexOf(".") +1)
// console.log(`File name: ${fileName}`);
// console.log(`File extension: ${fileExtension}`);
// }
// solve('C:\\Internal\\training-internal\\template.bak.pptx') 




//// 04. String Substring ///////////////////////////////////////////////////////////////

// function solve(word, string) {
//     word = word.toLowerCase();
//     let myArr = string.split(" ");
//     let isTrue = true;
//     for (let one of myArr) {
//         if (one.toLowerCase() == word) {
//             console.log(word);
//             isTrue = false;
//             break;
//         }
//     }
//     if (isTrue) {
//         console.log(`${word} not found!`);
//     }
// }
// solve('javascript', 
// 'JavaScript is the best programming language')




//// 05. Replace Repeating Chars   ////////////////////////////////////////////////////

// function solve(str) {
//     let string = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i + 1]) {
//             string += str[i];
//         }
//     }
// console.log(string);
// }
// solve('qqqwerqwecccwd')




//// 06. Pascal - Case Splitter /////////////////////////////////////////////////////////

// function solve(str) {
// str = str.split("");
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             str[i - 1] += " ";
//         }
//     }
// console.log(str.join("").split(" ").join(", "));
// }
// solve('ThisIsSoAnnoyingToDo' )




//// 07. Cut and Reverse ////////////////////////////////////////////////////////////////

// function solve(str) {
// let firstHalf = str.substring(0, str.length/2).split("").reverse().join("");
// let secondHalf = str.substring(str.length/2).split("").reverse().join("");
// console.log(firstHalf);
// console.log(secondHalf);
// }
// solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');




//// 08. *Hard Words. ////////////////////////////////////////////////////////////////////////////

// function solve(input) {
//     let text = input.shift().split(" ");
//     let words = input.shift();
//     for (let i = 0; i < text.length; i++) {
//         if (text[i].startsWith("_")) {
//             let ind = text[i].lastIndexOf("_")
//             let wordLength = ind + 1;
//             for (let el of words) {
//                 if (el.length == wordLength) {
//                     text[i] = el.concat(text[i].substring(ind + 1))
//                 }
//             }
//         }
//     }
//     console.log(text.join(" "));
// }
// solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
//     ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])




//// 09. Password Generator ////////////////////////////////////////////////

// function solve(input) {
//     let concat = input[0].concat(input[1]).split("");
//     let third = input[2].toUpperCase().split("");
//     let newCh = "";
//     let newArr = [];
//     for (let ch of concat) {
//         if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
//             newCh = third.shift();
//             newArr.push(newCh)
//             third.push(newCh)
//         } else {
//             newArr.push(ch)
//         }
//     }
//     console.log(`Your generated password is ${newArr.reverse().join("")}`);
// }
// solve(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed' ])




//// 10. Letters Change Numbers //////////////////////////////////////////////////////////

// function solve(input) {
//     let list = input.split(" ")
//     let newList = [];
//     for (let element of list) {
//         if (element == "") {
//             continue;
//         } else {
//             newList.push(element.trim())
//         }
//     }
//     let smallLetters = {
//         'a': 1,
//         'b': 2,
//         'c': 3,
//         'd': 4,
//         'e': 5,
//         'f': 6,
//         'g': 7,
//         'h': 8,
//         'i': 9,
//         'j': 10,
//         'k': 11,
//         'l': 12,
//         'm': 13,
//         'n': 14,
//         'o': 15,
//         'p': 16,
//         'q': 17,
//         'r': 18,
//         's': 19,
//         't': 20,
//         'u': 21,
//         'v': 22,
//         'w': 23,
//         'x': 24,
//         'y': 25,
//         'z': 26
//     }
//     let sum = 0;
//     for (let element of newList) {
//         let tokens = element.split("")
//         let firstL = tokens.shift();
//         let lastL = tokens.pop();
//         let num = Number(tokens.join(""));
//         if (firstL.toUpperCase() === firstL) {
//             num /= smallLetters[firstL.toLowerCase()]
//         } else {
//             num *= smallLetters[firstL]
//         }
//         if (lastL.toUpperCase() === lastL ) {
//             num -= smallLetters[lastL.toLowerCase()]
//         } else {
//             num += smallLetters[lastL]
//         }
//         sum+= num;
//     }
//     console.log(sum.toFixed(2));
// }
// solve('A12b s17G')




//////////////////////////////////////////////////////////////////////////////////////

//        //              MORE EXCERCISES           ///

//// 01. Value of a string  //////////////////////////////////////////////////////

// function solve(input) {
//     let sum = 0;
//     str = input.shift().split("");
//     let condition = input.shift();
//     for (let ch of str) {
//         let c = Number(ch.charCodeAt())
//         if (c < 65 || c > 90 && c < 97 || c > 122) {
//             continue;
//         } else {
//             switch (condition) {
//                 case "LOWERCASE":
//                     if (ch.toLowerCase() == ch) {
//                         sum += Number(ch.charCodeAt());
//                     }
//                     break;
//                 case "UPPERCASE":
//                     if (ch.toUpperCase() == ch) {
//                         sum += Number(ch.charCodeAt())
//                     }
//                     break;
//             }
//         }
//     }
//     console.log(`The total sum is: ${sum}`);
// }
// solve([ 'AC/DC', 'UPPERCASE', '' ])




//// 02. Serialize String  ////////////////////////////////////////////////////////

// function solve(input) {
//     let str = input.shift();
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];
//         if (!obj.hasOwnProperty(ch)) {
//             obj[ch] = [i];
//         } else {
//             obj[ch].push(i)
//         }
//     }
//     for (let key in obj) {
//         console.log(`${key}:${obj[key].join("/")}`);
//     }
// }
// solve([ 'avjavamsdmcalsdm', '' ])




//// 03. Deserialize String       //////////////////////////////////////////////////////

// function solve(input) {
//     let str = [];
//     let line = input.shift()
//     while (line !== 'end') {
//         let ch = line[0];
//         let newLine = line.slice(2)
//         if (newLine.length > 1) {
//             newLine = newLine.split("/").map(Number)
//         } else {
//             newLine = [Number(newLine)]
//         }
//         newLine.forEach(element => {
//             str[element] = ch
//         });
//         line = input.shift()
//     }
//     if (line == 'end') {
//         console.log(str.join(""));
//     }
// }
// solve(['a:0/2/4/6', 'b:1/3/5', 'end'])




//// 04. Ascii Sumator ////////////////////////////////////////////////////////////////

// function solve(input) {
//     let firstChar = input.shift().charCodeAt();
//     let secondChar = input.shift().charCodeAt();
//     let startInd = 0;
//     let stopInd = 0;
//     let sum = 0;
//     if (firstChar > secondChar) {
//         stopInd = firstChar;
//         startInd = secondChar
//     } else {
//         startInd = firstChar;
//         stopInd = secondChar;
//     }
//     let str = input.shift().split("")
//     for (let char of str) {
//         let c = char.charCodeAt()
//         if (c > startInd && c < stopInd) {
//             sum += Number(c)
//         }
//     }
//     console.log(sum);
// }
// solve(['a', '1', 'jfe392$#@j24ui9ne#@$'])




//// 05. Treasure Finder /////////////////////////////////////////////////////////

// function solve(input) {
//     let keys = input.shift().split(" ").map(Number)
//     let tempKeys = [];
//     let list = []
//     for (let line of input) {
//         for (let i = 0; i < keys.length; i++) {
//             tempKeys[i] = keys[i]
//         }
//         if (line != 'find') {
//             line = line.split("");
//             let newLine = '';
//             for (let ch of line) {
//                 let tempKey = tempKeys.shift();
//                 ch = ch.charCodeAt() - tempKey;
//                 ch = String.fromCharCode(ch)
//                 newLine += ch
//                 tempKeys.push(tempKey)
//             }
//             list.push(newLine)
//         } else {
//             break;
//         }
//     }
//     list.forEach(string => {
//         let startInd = string.indexOf("&")
//         let lastInd = string.lastIndexOf("&")
//         let product = string.substring(startInd + 1, lastInd)
//         let firstInd = string.indexOf("<");
//         let last = string.indexOf(">")
//         let location = string.substring(firstInd + 1, last);
//         console.log(`Found ${product} at ${location}`);
//     })
// }
// solve([
//     '1 2 1 3',
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     'find'
// ])




//// 06. Melrah Shake /////////////////// 50/100

// function solve(input) {
//     let str = input.shift();
//     let pattern = input.shift()

//     while (pattern.length >= 1) {
//         let isTrue = true
//         if (str.includes(pattern)) {

//             let ind = str.indexOf(pattern);
//             str = str.substring(0, ind).concat(str.substring(ind + pattern.length))
//             let ind2 = str.lastIndexOf(pattern)
//             str = str.substring(0, ind2).concat(str.substring(ind2 + pattern.length))
//             if (!str.includes(pattern)) {
//                 console.log("Shaked it.");
//                 isTrue = false
//             }
//         }
//         if (isTrue) {
//             console.log("No shake.");
//         }


//         let pattInd = Math.floor(pattern.length / 2)
//         pattern = pattern.substring(0, pattInd).concat(pattern.substring(pattInd + 1))

//     }
//     console.log(str);
// }
// solve(['astalavista baby', 'sta', '']
// )


