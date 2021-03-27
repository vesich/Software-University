function addItem() {
    const inputText = document.querySelector('#newItemText');
    const inputValue = document.querySelector('#newItemValue');

    const menu = document.querySelector('#menu');
    let options = document.createElement('option');
    if (inputText.value == '' && inputValue.value == '') {
        return;
    }
    options.textContent = inputText.value;
    options.value = inputValue.value;
    menu.appendChild(options)
    inputText.value = '';
    inputValue.value = '';
}