getInfo()

async function getInfo() {

    const url = "http://localhost:3030/jsonstore/advanced/articles/list";
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(obj => {

        const div = e("div", { className: "accordion" },
            e("div", { className: "head" },
                e("span", {}, obj.title),
                e("button", { className: "button", id: obj._id }, "More")))

        document.getElementById('main').appendChild(div)
        div.querySelector("button").addEventListener('click', () => showInfo(obj._id, div))
    })
}

async function showInfo(id, firstDiv) {
    const url = "http://localhost:3030/jsonstore/advanced/articles/details/" + id;
    const response = await fetch(url);
    const data = await response.json();

    let newDiv = e("div", { className: "accordion" },
        e("div", { className: "head" },
            e("span", {}, data.title),
            e("button", { className: "button", id: id, onClick: toggleMenu }, "More")),
        e('div', { className: "extra" },
            e('p', {}, data.content)))


    firstDiv.replaceWith(newDiv)
    newDiv.querySelector(".extra").style.display = "block"
    newDiv.querySelector("button").textContent = "Less"

    function toggleMenu() {
        newDiv.replaceWith(firstDiv)
        firstDiv.querySelector("button").textContent = "More"
    }
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e)
        }
    });
    return result;
}
