async function loadCommits() {

    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value
    const ul = document.getElementById('commits')

    const url = `https://api.github.com/repos/${username}/${repo}/commits`

    try {
        ul.innerHTML = ""
        const response = await fetch(url)

        if (!response.ok) {
            throw Error(response.status);
        }

        const data = await response.json()
        data.map(entry => entry.commit).forEach(one => {

            let li = document.createElement('li');
            li.textContent = `${one.author.name}: ${one.message}`
            ul.appendChild(li)
        })
    } catch (err) {
        let li = document.createElement('li')
        li.textContent = err
        ul.appendChild(li)
    }




}