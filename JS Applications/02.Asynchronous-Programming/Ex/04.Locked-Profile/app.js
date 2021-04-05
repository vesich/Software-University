async function lockedProfile() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const main = document.getElementById("main")
    const response = await fetch(url);
    const data = await response.json();
    Object.values(data).forEach(profile => {
        const one = e('div', { className: "profile" },
            e("img", { src: "./iconProfile2.png", className: "userIcon" }),
            e("label", {}, "Lock"),
            e("input", { type: "radio", name: profile.username, value: "lock", checked: "true" }),
            e("label", {}, "Unlock"),
            e("input", { type: "radio", name: profile.username, value: "unlock" }),
            e("br", {}),
            e("hr", {}),
            e("label", {}, "Username"),
            e("input", { type: "text", name: "user1Username", value: profile.username, disabled: "true" }),
            e("div", { id: "user2HiddenFields" },
                e("hr", {}),
                e("label", {}, "Email:"),
                e("input", { type: "email", name: "user2Email", value: profile.email, disabled: "true" }),
                e("label", {}, "Age:"),
                e("input", { type: "email", name: "user2Age", value: profile.age, disabled: "true" })
            ),
            e("button", {}, "Show more"))

        main.appendChild(one)
    })

    Array.from(main.children).forEach(profile => {
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