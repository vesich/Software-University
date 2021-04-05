async function getInfo() {
    const input = document.getElementById('stopId');
    const divResult = document.getElementById('stopName');
    const id = input.value;

    const url = "http://localhost:3030/jsonstore/bus/businfo/" + id;

    try {
        const ulElement = document.getElementById('buses');
        ulElement.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json()

        divResult.textContent = data.name;

        Object.entries(data.buses).map(([bus, time]) => {
            const result = document.createElement('li');
            result.textContent = `Bus ${bus} arrives in ${time} minutes`

            ulElement.appendChild(result);
        })
        input.value = '';
    } catch (error) {
        divResult.textContent = 'Error'
        input.value = '';
    }
}