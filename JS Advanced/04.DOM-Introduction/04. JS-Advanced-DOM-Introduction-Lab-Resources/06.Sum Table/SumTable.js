function sumTable() {

    const rows = document.querySelectorAll('table tr')
    let result = 0;
    for (let i = 1; i < rows.length - 1; i++) {
        let cols = rows[i].children
        let num = Number(cols[cols.length - 1].textContent);
        result += num
    }
    document.getElementById('sum').textContent = result

}
























































