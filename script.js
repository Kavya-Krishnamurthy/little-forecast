const weatherCodes = {
    0: "Clear sky 🌞",
    1: "Mainly clear 🌞",
    2: "Partly cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    48: "Depositing rime fog 😶‍🌫",
    51: "Light drizzle 🌧️",
    61: "Rain ☔",
    71: "Snow fall ❄️",
    95: "Thunderstorm ⚡"
};

// Convert city name to coordinates
async function getCoordinates(city) {

    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    try {

        const geoUrl =
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

        const response = await fetch(geoUrl);

        if (!response.ok) {
            throw new Error("Failed to fetch location data.");
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("City not found.");
        }

        return {
            latitude: data.results[0].latitude,
            longitude: data.results[0].longitude,
            name: data.results[0].name,
            country: data.results[0].country
        };

    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Temperature endpoint
async function getTemperature() {

    const city = document.getElementById("cityInput").value;

    if (!city) {
        document.getElementById("errorMessage").textContent =
            "Please enter a city name.";
        return;
    }

    const location = await getCoordinates(city);

    if (!location) return;

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
        }

        const data = await response.json();

        document.getElementById("weatherData").innerHTML = `
            <h2>${location.name}, ${location.country}</h2>
            <p><strong>Temperature:</strong> 
            ${data.current.temperature_2m}°C</p>
        `;

    } catch (error) {
        document.getElementById("errorMessage").textContent =
            error.message;
    }
}

// Conditions endpoint
async function getConditions() {

    const city = document.getElementById("cityInput").value;

    if (!city) {
        document.getElementById("errorMessage").textContent =
            "Please enter a city name.";
        return;
    }

    const location = await getCoordinates(city);

    if (!location) return;

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=weather_code`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
        }

        const data = await response.json();

        const condition =
            weatherCodes[data.current.weather_code] || "Unknown";

        document.getElementById("weatherData").innerHTML = `
            <h2>${location.name}, ${location.country}</h2>
            <p><strong>Condition:</strong> ${condition}</p>
        `;

    } catch (error) {
        document.getElementById("errorMessage").textContent =
            error.message;
    }
}
