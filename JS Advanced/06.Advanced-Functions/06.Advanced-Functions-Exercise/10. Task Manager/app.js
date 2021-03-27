function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const sections = Array.from(document.getElementsByTagName("section"))

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault()
        if (task.value == '' || description.value == '' || date.value == '') { return }

        const article = document.createElement('article');

        const h3 = e('h3', task.value);
        const pDescr = e('p', `Description: ${description.value}`);
        const pDate = e('p', `Due Date: ${date.value}`)

        let divButtons = document.createElement('div')
        divButtons.className = "flex";

        const startBtn = e('button', "Start")
        startBtn.className = "green";
        startBtn.addEventListener('click', inProgress)

        const deleteBtn = e('button', 'Delete');
        deleteBtn.className = "red";
        deleteBtn.addEventListener('click', deleteArticle)

        task.value = '';
        description.value = '';
        date.value = '';

        divButtons.appendChild(startBtn)
        divButtons.appendChild(deleteBtn);

        article.appendChild(h3)
        article.appendChild(pDescr)
        article.appendChild(pDate)
        article.appendChild(divButtons);

        sections[1].children[1].appendChild(article)

    }

    function deleteArticle(ev) {
        ev.target.parentNode.parentNode.remove()
    }

    function inProgress(ev) {
        let finishBtn = e('button', 'Finish')
        finishBtn.className = "orange"
        finishBtn.addEventListener('click', completeTask)
        document.getElementById('in-progress').appendChild(ev.target.parentNode.parentNode)
        ev.target.parentNode.appendChild(finishBtn)
        ev.target.remove()
    }

    function completeTask(e) {
        sections[3].children[1].appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.remove()
    }

    function e(type, content) {
        const element = document.createElement(type)
        element.textContent = content;
        return element
    }
}