function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather)
}

attachEvents();

async function getWeather() {
    const input = document.getElementById('location');
    const cityName = input.value;
    input.value = '';

    const code = await getCode(cityName)
    const [current, upcoming] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ])

    const emojis = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        Degrees: '&#176'
    }

    document.getElementById('forecast').style.display = "block";

    let div1 = document.createElement('div');

    div1.setAttribute("class", "forecasts");

    let span1 = document.createElement('span');
    span1.setAttribute("class", "condition symbol");
    span1.innerHTML = emojis[current.forecast.condition]

    let span2 = document.createElement('span');
    span2.setAttribute("class", "condition")

    let span3 = document.createElement('span')
    span3.setAttribute("class", "forecast-data")
    span3.textContent = current.name
    let span4 = document.createElement('span')
    span4.setAttribute("class", "forecast-data")
    span4.innerHTML = `${current.forecast.low}${emojis.Degrees}/${current.forecast.high}${emojis['Degrees']}`
    let span5 = document.createElement('span')
    span5.setAttribute("class", "forecast-data")
    span5.textContent = current.forecast.condition

    span2.appendChild(span3)
    span2.appendChild(span4)
    span2.appendChild(span5)
    div1.appendChild(span1)
    div1.appendChild(span2)

    if (document.getElementById('current').children[1]) {
        document.getElementById('current').children[1].remove()
    }

    document.getElementById('current').appendChild(div1)

    if (document.getElementById('upcoming').children.length > 1) {
        document.getElementById('upcoming').removeChild(document.getElementById('upcoming').children[1])
    }

    let div = document.createElement('div');
    div.setAttribute("class", "forecast-info")

    upcoming.forecast.forEach(day => {

        let span = document.createElement('span')
        span.setAttribute("class", "upcoming")

        let span1 = document.createElement('span')
        span1.setAttribute("class", "symbol")
        span1.innerHTML = emojis[day.condition]

        let span2 = document.createElement('span');
        span2.setAttribute("class", "forecast-data");
        span2.innerHTML = `${day.low}${emojis['Degrees']}/${day.high}${emojis['Degrees']}`

        let span3 = document.createElement('span');
        span3.setAttribute("class", "forecast-data");
        span3.textContent = day.condition;

        span.appendChild(span1);
        span.appendChild(span2);
        span.appendChild(span3);
        div.appendChild(span)
    })

    document.getElementById('upcoming').appendChild(div)
}

async function getCode(cityName) {
    const url = "http://localhost:3030/jsonstore/forecaster/locations";
    try {
        const response = await fetch(url);
        const data = await response.json()

        return data.find(x => x.name.toLowerCase() == cityName.toLowerCase()).code
    } catch (err) {
        return alert("Error")
    }
}

async function getCurrent(code) {
    const url = "http://localhost:3030/jsonstore/forecaster/today/" + code;
    const response = await fetch(url);
    const data = await response.json()
    return data;
}

async function getUpcoming(code) {
    const url = "http://localhost:3030/jsonstore/forecaster/upcoming/" + code;
    const response = await fetch(url);
    const data = await response.json()
    return data;
}



