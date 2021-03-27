function focus() {

    Array.from(document.querySelectorAll('input')).forEach(div => {
    
        div.addEventListener('focus', onFocus);
        div.addEventListener('blur', onBlur);
    })

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused'

    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';

    }
}