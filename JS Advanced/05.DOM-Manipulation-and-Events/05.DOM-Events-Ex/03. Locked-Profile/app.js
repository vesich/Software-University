// function lockedProfile() {

//     document.getElementById('main').addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') {
//             const profile = e.target.parentNode;
//             const isLocked = profile
//                 .querySelector('input[type=radio]:checked').value === 'lock';
//             if (isLocked) {
//                 return;
//             }

//             let div = profile.querySelector('div');
//             let isVisible = div.style.display === "block";

//             div.style.display = isVisible ? 'none' : 'block';
//             if (e.target.textContent == 'Show more') {
//                 e.target.textContent = 'Hide it'
//             } else {
//                 e.target.textContent = 'Show more'
//             }
//             //console.log(e.target.textContent);
//             //e.target.texContent = !isVisible ? 'Hide it' : 'Show more';


//         }
//     })
// }

function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('#main>div'))

    profiles.forEach(profile => {
        let btn = profile.querySelector("button")
        let locked = profile.querySelector("input[value='lock']")
        btn.addEventListener('click', function () {
            if (locked.checked) { return }
            if (btn.textContent == "Show more") {
                profile.querySelector('div').style.display = "block"
                btn.textContent = "Hide it"
            } else if (btn.textContent == "Hide it") {
                profile.querySelector('div').style.display = "none";
                btn.textContent = "Show more"
            }
        })
    })
}