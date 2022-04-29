const url = "http://api.openweathermap.org/data/2.5/weather?";
const key = "98bee1d4444fe9dc41ad7842eb0fe9bf";


const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        getResult(searchBar.value);
    }
})

const getResult = (cityName) => {
    let query = `${url}q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult);
}

const displayResult = weather => {
    const city = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const desc = document.querySelector('.desc');
    const minMaxTemp = document.querySelector('.minmaxtemp');

    city.textContent = `${weather.name}, ${weather.sys.country}`;
    temp.textContent = `${Math.round(weather.main.temp)} °C`;
    desc.textContent = weather.weather[0].description;
    minMaxTemp.textContent = `${Math.round(weather.main.temp_min)} °C / 
    ${Math.round(weather.main.temp_max)} °C`;
}