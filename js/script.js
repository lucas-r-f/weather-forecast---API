//Variáveis e seleção de elementos
const apiKey = "78a58b51a528ac4982f8996d3f817b23";
const apiCountryURL = "https://flagcdn.com/w20/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

//funções

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async (city) => {
    const data = getWeatherData(city);

    console.log(getWeatherData);
    cityElement.innerText = data.name;
    descElement.innerText = data.weather[0].description;
};

//Eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;  

    showWeatherData(city);
});