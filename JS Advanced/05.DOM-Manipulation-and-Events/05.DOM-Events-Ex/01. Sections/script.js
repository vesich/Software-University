// function create(words) {

//    const divContent = document.getElementById('content');

//    words.forEach(word => {
//       let div = document.createElement('div');
//       let paragraph = document.createElement('p');
//       paragraph.textContent = word;
//       paragraph.style.display = "none";
//       div.appendChild(paragraph);
//       div.addEventListener('click', (e) => {
//          e.target.children[0].style.display = 'block';

//       })
//       divContent.appendChild(div);
//    })
// }


// function create(words) {
//    const output = document.getElementById('content')
//    words.forEach(w => output.appendChild(createArticle(w)));

//    function createArticle(text) {
//       const pEl = e('p', text);
//       pEl.style.display = 'none';

//       const divEl = e('div', pEl);
//       divEl.addEventListener('click', () => {
//          pEl.style.display = '';
//       })
//       return divEl
//    }

//    function e(type, content) {
//       const result = document.createElement(type);

//       if (typeof content == 'string') {
//          result.textContent = content;
//       } else {
//          result.appendChild(content)
//       }
//       return result
//    }

// }

function create(input) {
   input.forEach(section => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = section;
      p.style.display = "none";
      div.appendChild(p);

      document.getElementById('content').appendChild(div)
      div.addEventListener('click', function () {
         p.style.display = ""
      })
   })
}