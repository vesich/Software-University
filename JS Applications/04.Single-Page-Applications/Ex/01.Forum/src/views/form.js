
import { createTheme } from '../api/data.js'

export function setupForm(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('click', onClick)
    return showForm

    async function showForm() {
        return section;
    }


    async function onClick(event) {
        event.preventDefault();

        if (event.target.tagName == "BUTTON") {
            if (event.target.className == 'cancel') {
                form.reset();

            } else {
                let title = form.querySelector('#topicName').value
                let userName = form.querySelector('#username').value
                let post = form.querySelector('#postText').value;
                const date = new Date();

                if (title == "" || userName == "" || post == "") {
                    return alert('All fields have to be filled!')
                }
                const theme = { title, userName, post, date }

                await createTheme(theme);
                form.reset();
                navigation.goTo('home')

            }
        }
    }
}