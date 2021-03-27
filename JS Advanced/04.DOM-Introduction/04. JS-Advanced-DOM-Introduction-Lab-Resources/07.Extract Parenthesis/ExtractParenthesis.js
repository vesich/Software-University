function extract() {
    let text = document.getElementById('content').textContent
    let regex = /\((.+?)\)/gm;
    let match = regex.exec(text);
    let arr = [];
    while (match != null) {
        arr.push(match[1])
        match = regex.exec(text)
    }
     console.log(arr.join("; "));
}