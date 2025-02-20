document.getElementById("menu-toggle").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("menu").classList.toggle("hidden");
});

document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuToggle = document.getElementById("menu-toggle");
    
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        if (!menu.classList.contains("hidden")) {
            menu.classList.add("hidden");
        }
    }
});

const weatherData = document.querySelector("#weather-data");
const weatherDataText = document.querySelector("#weather-data-text");

fetch("https://api.open-meteo.com/v1/forecast?latitude=62.3913&longitude=17.3063&current=temperature_2m,apparent_temperature,is_day,weather_code&forecast_days=1")
.then(response => {
    if(!response.ok){
        throw new Error("Gick inte att hämta väderdata.")
    }

    return response.json();
})
.then(data => {
    const icon = document.createElement("i");

    if(data.current.weather_code == 2 || data.current.weather_code == 3){
        icon.classList.add("fa-solid", "fa-cloud", "footer-weather-icon")
    }
    
    const ptag = document.createElement("p");
    ptag.textContent = `${data.current.temperature_2m}°C | känns som ${data.current.apparent_temperature}°C`

    weatherData.insertBefore(icon, weatherData.firstChild)
    weatherDataText.appendChild(ptag);
})
.catch(error => {
    return console.log("fel inträffat", error)
})

// data.current.temperature_2m
// data.current.weather_code
// data.current.apparent_temperature
