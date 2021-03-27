// function toggle() {
//     let button = document.querySelector('.button')
//     let divExtra = document.querySelector('#extra')

//     if (button.textContent == "More") {
//         divExtra.style.display = 'block'
//         button.textContent = 'Less'
//     } else {
//         button.textContent = 'More'
//         divExtra.style.display = 'none'
//     }
// }

function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');

    const isHidden = button.textContent == 'More';
    divExtra.style.display = (isHidden) ? 'block' : 'none';
    button.textContent = isHidden ? 'Less' : 'More'
}



