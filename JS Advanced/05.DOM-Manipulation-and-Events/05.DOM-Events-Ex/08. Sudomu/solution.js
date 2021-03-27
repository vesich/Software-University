function solve() {
    const buttons = document.querySelectorAll('button')
    let allInputs = Array.from(document.querySelectorAll('tbody input'))
    const allRows = Array.from(document.querySelectorAll('tbody tr'));

    buttons[1].addEventListener('click', clearFunc)

    function clearFunc() {
        allInputs.forEach(one => {
            one.value = '';
        })
    }

    buttons[0].addEventListener('click', checkFunc)

    function checkFunc() {
        allRows.forEach(row => {
           let aRow = [...row.children];
          aRow = aRow.map(val => val.children[0].value).map(Number)
          aRow.forEach(element => {
              
          })
        })
    }
}