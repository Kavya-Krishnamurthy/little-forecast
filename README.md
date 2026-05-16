# little-forecast
This project is a simple weather forecast webpage using the Open-Meteo API.

# live demo 
- https://kavya-krishnamurthy.github.io/little-forecast/index.html


Little Forecast is a lightweight weather dashboard designed with a fun doodle aesthetic while maintaining the clean usability of modern weather widgets found on phones and smartwatches.

The application allows users to:
- Search weather information by city
- View current temperature forecasts
- View current weather conditions
- Navigate seamlessly between weather endpoints
- Experience a responsive, animated UI

This project was built using:
- HTML
- CSS
- Vanilla JavaScript
- Open-Meteo Weather API

---

## 🎨 Design Inspiration

The UI combines:
- Google Doodle-style playful visuals
- Apple Weather widget-inspired glassmorphism
- Soft pastel gradients
- Rounded iWatch-style weather cards
- Floating animations and clean responsive layouts

The goal was to create a weather experience that feels:
- Friendly
- Interactive
- Modern
- Lightweight

---

## 🚀 Features

### ✅ Weather Search
Users can search any city using the Open-Meteo Geocoding API.

### ✅ Temperature Forecast Endpoint
Displays:
- Current temperature
- City name
- Country

### ✅ Weather Conditions Endpoint
Displays:
- Current weather condition
- Human-readable weather descriptions
  (Sunny, Cloudy, Rainy, etc.)

### ✅ Dynamic API Requests
Each page makes independent GET requests only for the data required for that specific endpoint.

### ✅ Navigation Between Endpoints
Users can switch between:
- Temperature Page
- Conditions Page

without unnecessary API requests.

### ✅ Error Handling
The application handles:
- Invalid city names
- Empty search inputs
- API/network failures

with user-friendly error messages.

### ✅ Responsive Design
The UI works across:
- Desktop
- Tablet
- Mobile devices

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & animations |
| JavaScript (ES6) | API requests & interactivity |
| Open-Meteo API | Weather data |
| Open-Meteo Geocoding API | City-to-coordinate conversion |

---

# 🌐 APIs Used

## 1. Open-Meteo Forecast API

Official Documentation:  
https://open-meteo.com/

### Temperature Endpoint

```bash
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m
