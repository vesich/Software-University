function deleteByEmail() {

    let input = document.getElementsByName('email')[0];
    let rows = Array.from(document.querySelectorAll('#customers tbody tr'))
    let result = document.querySelector('#result');

    rows.forEach(row => {

        if (row.children[1].textContent == input.value.trim()) {

            row.remove()
            result.textContent = "Deleted."
        } else {
            result.textContent = "Not found."
        }
    })
    input.value = ''
}




