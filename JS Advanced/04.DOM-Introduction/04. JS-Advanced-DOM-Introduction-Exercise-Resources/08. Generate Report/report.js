function generateReport() {
    let output = document.querySelector('#output')
    let colNames = Array.from(document.querySelectorAll('thead tr th input'))
    let bigArray = Array.from(document.querySelectorAll('tbody tr'));

    let result = [];
    let indNames = {};
    colNames = colNames.forEach((el, ind) => {
        if (el.checked) {
            indNames[el.name] = ind
        }
    })

    for (let row of bigArray) {
        let obj = {};
        for (let [key, value] of Object.entries(indNames)) {
            let currentRowArr = row.children[value].textContent;
            obj[key] = currentRowArr;
        }
        result.push(obj);
    }
    output.value = JSON.stringify(result, null, 2)
    // output.value = JSON.stringify(result, null, 2)
}

   
