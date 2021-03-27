function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(element => {
        element.style.backgroundColor = 'teal'
    })
}

