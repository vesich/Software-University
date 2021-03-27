// function solve() {
//   let rightAnswers = 0;
//   let rightOnes = ['low-value', 'high-value', 'low-value']
//   let allSections = [...document.querySelectorAll('section')];

//   console.log(allSections);

//   for (let i = 0; i < allSections.length; i++) {
//     allSections[i].addEventListener('click', (e) => {
//       if (e.target.tagName !== 'P') {
//         return;
//       }
//       let isTrue = true;

//       if (rightOnes[i] == e.target.parentNode.parentNode.classList[1]) {
//         rightAnswers++;
        
//         allSections[i + 1].setAttribute('class', '')
//         allSections[i].setAttribute('class', 'hidden')
//       } else {
//         isTrue = false;
//         console.log(`You have ${rightAnswers} right answers`);
//         return;
//       }


//       //   if (!isTrue) {
//       //   console.log('you lost');
//       // }

//     })

//   }
// }
