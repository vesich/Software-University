// function solve() {
//   let text = document.querySelector('#text').value
//   let namingConv = document.querySelector('#naming-convention').value

//   function camelCase(string) {

//     string = string.toLowerCase().split(" ")
//     let text = string[0] + '';
//     for (let i = 1; i < string.length; i++) {
//       string[i] = string[i][0].toUpperCase() + string[i].slice(1)
//       text += string[i]
//     }
//     return text
//   }

//   function pascalCase(string) {
//     string = string.toLowerCase().split(" ");
//     let text = '';
//     string.forEach(word => {
//       word = word[0].toUpperCase() + word.slice(1)
//       text += word
//     })
//     return text
//   }

//   switch (namingConv) {
//     case 'Camel Case':
//       text = camelCase(text)
//       break;
//     case 'Pascal Case':
//       text = pascalCase(text);
//       break;
//     default:
//       text = 'Error!'
//       break;
//   }
//   let result = document.querySelector('#result').textContent = text;
// }



function solve() {

  const text = document.getElementById('text').value;
  const result = document.getElementById('result');

  function toCamelCase(text) {
    text = text.toLowerCase().split(" ")
    for (let i = 1; i < text.length; i++) {
      text[i] = text[i][0].toUpperCase() + text[i].slice(1).toLowerCase()
    }
    return text.join("")
  }

  function toPascalCase(text) {
    text = text.toLowerCase().split(" ")
    for (let i = 0; i < text.length; i++) {
      text[i] = text[i][0].toUpperCase() + text[i].slice(1).toLowerCase()
    }
    return text.join("")
  }

  switch (document.getElementById('naming-convention').value) {
    case 'Camel Case':
      result.textContent = toCamelCase(text)
      break;
    case 'Pascal Case':
      result.textContent = toPascalCase(text)
      break;
    default:
      result.textContent = 'Error!';
      break;
  }
}