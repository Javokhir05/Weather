const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

changeLocation.city.focus()
//loader

function loader(state) {
    if(state) {
        overlay.classList.remove('d-none')
    } else {
        overlay.classList.add('d-none')
    }
}
// update UI

const updateUI = (weather) => {
    console.log(weather)
    details.innerHTML = `
        <h5 class="mb-3">${weather.name},${weather.sys.country}</h5>
        <p class="mb-3">${weather.weather[0].main}</p>
        <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
        </div>`

        if (card.classList.contains('d-none')) {
             card.classList.remove('d-none')
        }
    weatherIcon.src=` https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}

//get weeather

const getWeather = async (city) => {
    const data = await getData(city)
    return data
}

// get location

changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then((data) => updateUI(data))
})
