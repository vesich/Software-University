// function encodeAndDecodeMessages() {

//     const firstBtn = document.querySelector('#main button');
//     firstBtn.addEventListener('click', (e) => {
//         let input = e.target.parentNode.querySelector('textarea');
//         let str = '';
//         input.value.split("").forEach(ch => {
//             ch = String.fromCharCode(ch.charCodeAt() + 1);
//             str += ch;
//         })
//         document.querySelectorAll('#main textarea')[1].value = str
//         input.value = '';
//         console.log(str);
//     })

//     const secBtn = document.querySelectorAll('#main button')[1];
//     secBtn.addEventListener('click', (e) => {
//         let input2 = e.target.parentNode.querySelector('textarea');
//         let str = '';
//         input2.value.split("").forEach(ch => {
//             ch = String.fromCharCode(ch.charCodeAt() - 1);
//             str += ch;
//         })
//         input2.value = str
//     })
// }

function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const map = {
        encode: {
            text: textAreas[0],
            button: buttons[0],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt() + 1)
            }
        },
        decode: {
            text: textAreas[1],
            button: buttons[1],
            func: (char) => {
                return String.fromCharCode(char.charCodeAt() - 1)
            }
        }
    }
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== "BUTTON") {
            return;
        }
        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        let message = map[type].text.value.split("").map(map[type].func).join("");

        map.encode.text.value = '';
        map.decode.text.value = message;
    })
}