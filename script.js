const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchWeather);

async function searchWeather() {

  const city = document.getElementById("cityInput").value;

  // Prevent empty input
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  try {

    // STEP 1: Get coordinates from city name
    const location = await getCoordinates(city);

    // STEP 2: Get weather data using coordinates
    const weather = await getWeather(
      location.latitude,
      location.longitude
    );

    // STEP 3: Display data
    document.getElementById("cityName").innerText =
      location.name;

    document.getElementById("temperature").innerText =
      `${Math.round(weather.temperature_2m)}°C`;

    document.getElementById("condition").innerText =
      getWeatherCondition(weather.weather_code);

    // STEP 4: Show doodle
    showDoodle(weather.weather_code);

  }

  catch (error) {

    console.log(error);

    alert("City not found!");

  }
}


// FUNCTION: Get city coordinates
async function getCoordinates(city) {

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );

  const data = await response.json();

  // Check if city exists
  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }

  return data.results[0];
}


// FUNCTION: Get weather data
async function getWeather(lat, lon) {

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
  );

  const data = await response.json();

  return data.current;
}


// FUNCTION: Convert weather code to condition
function getWeatherCondition(code) {

  if (code === 0) {
    return "Sunny";
  }

  else if (code >= 1 && code <= 3) {
    return "Cloudy";
  }

  else if (code >= 45 && code <= 48) {
    return "Foggy";
  }

  else if (code >= 51 && code <= 67) {
    return "Rainy";
  }

  else if (code >= 71 && code <= 77) {
    return "Snowy";
  }

  else if (code >= 80 && code <= 99) {
    return "Stormy";
  }

  else {
    return "Unknown";
  }
}


// FUNCTION: Show doodles
function showDoodle(code) {

  const doodle = document.getElementById("doodle");

  if (code === 0) {

    doodle.innerHTML = "☀️✨";

  }

  else if (code >= 1 && code <= 3) {

    doodle.innerHTML = "☁️☁️";

  }

  else if (code >= 45 && code <= 48) {

    doodle.innerHTML = "🌫️";

  }

  else if (code >= 51 && code <= 67) {

    doodle.innerHTML = "🌧️☔";

  }

  else if (code >= 71 && code <= 77) {

    doodle.innerHTML = "❄️☃️";

  }

  else if (code >= 80 && code <= 99) {

    doodle.innerHTML = "⛈️⚡";

  }

  else {

    doodle.innerHTML = "🌈";

  }
}
