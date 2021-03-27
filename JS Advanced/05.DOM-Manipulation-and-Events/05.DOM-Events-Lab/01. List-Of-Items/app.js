// function addItem() {
//     let newLi = document.createElement('li');
//     newLi.textContent = document.querySelector('#newItemText').value;
//     if (document.querySelector('#newItemText').value != '') {
//         document.querySelector('#items').appendChild(newLi)
//     }

//     document.querySelector('#newItemText').value = '';
// }

function addItem() {

    let textArea = document.getElementById('newItemText');
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.textContent = textArea.value;
    ul.appendChild(li)
    textArea.value = '';
}