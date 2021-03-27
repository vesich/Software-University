// function addItem() {
//     let li = document.createElement('li');
//     li.textContent = document.querySelector('#newText').value;
//     let anchor = document.createElement('a')
//     anchor.href = "#"
//     anchor.textContent = "[Delete]";
//     li.appendChild(anchor)
//     document.querySelector('#items').appendChild(li)
//     anchor.addEventListener('click', (ev) => {
//         ev.target.parentNode.remove();
//     })

//     document.querySelector('#newText').value = '';
// }




// function addItem() {
//     const input = document.getElementById('newText');
//     const liElement = createElement('li', document.getElementById('newText').value);
//     const deleteBtn = createElement('a', '[Delete]')
//     deleteBtn.href = "#";
//     deleteBtn.addEventListener('click', (ev) => {
//         ev.target.parentNode.remove();
//     })
//     liElement.appendChild(deleteBtn)

//     document.getElementById('items').appendChild(liElement);
//     input.value = '';

//     function createElement(type, content) {
//         const element = document.createElement(type);
//         element.textContent = content;
//         return element;
//     }
// }


function addItem() {

    let ulList = document.getElementById('items');
    let textArea = document.getElementById('newText');

    let newLi = document.createElement('li');
    newLi.textContent = textArea.value;


    let ancher = document.createElement('a')
    ancher.textContent = '[Delete]'
    ancher.setAttribute('href', '#')
    newLi.appendChild(ancher)
    ulList.appendChild(newLi)
    textArea.value = ''

    ancher.addEventListener('click', (e) => {
       e.target.parentNode.remove()
    });


} 