# little-forecast (pre-work assignment for CTD) 
This project is a simple lightweight weather forecast webpage application using the Open-Meteo API.

# live demo 
- https://kavya-krishnamurthy.github.io/little-forecast/index.html


This simple webpage application allows users to:
- Search weather information by city 
- View current temperature forecasts
- View current weather conditions
- Navigate seamlessly between the two weather  endpoints
- Experience a responsive, light animated UI


This project was built using:
- HTML
- CSS
- Vanilla JavaScript
- Open-Meteo Weather API


The goal was to create a weather forecast experience that feels:
- Friendly
- Interactive
- Modern
- Lightweight


Requirements: 
- Modern web browser
- Stable Internet connection (for Open-Meteo API requests)

---

# Features

- Weather Search :
  Users can search any city using the Open-Meteo Geocoding API.

- Temperature Forecast Endpoint
Displays:
  - Current temperature
  - City name
  - Country

- Weather Conditions Endpoint
Displays:
  - Current weather condition
  - Readable weather descriptions
  (Eg: Sunny, Cloudy, Rainy, etc.)

# API Requests
- Each page makes independent GET requests only for the data required for that specific endpoint.

# Navigation Between Endpoints
Users can switch between the two pages without unnecessary API requests.
i.e. 
- Temperature Page and
- Conditions Page

# Error Handling
This webpage application handles user-friendly error messages for : 
- Invalid city names
- Empty search inputs
- API/network failures
 
# APIs Used
Open-Meteo Forecast API official documentation:  
https://open-meteo.com/

# Temperature Endpoint
```bash
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m
