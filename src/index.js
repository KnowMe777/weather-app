import renderUI from './dom.js';

//FUNCTION TO GET DATA FROM API
async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=us&key=R8PVAZYUY6SN4ETQYBJPQ8A63&contentType=json`
    );
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    console.log('weather data', data);
    updateUI(data);
    return data;
  } catch (error) {
    console.log('error while fetching data', error);
  }
}

// FUNCTION TO UPDATE DATA ON UI
function updateUI(data) {
  //UPDATE TEMP
  const temp = document.querySelector('.temp');
  const tempC = convert(data.currentConditions.temp);
  const roundedTempC = parseFloat(tempC.toFixed(0));
  temp.textContent = `${roundedTempC}`;

  //UPDATE LOCATION
  const city = document.querySelector('.location');
  city.textContent = data.resolvedAddress.toUpperCase();

  //UPDATE WEATHER CONDITIONS
  const weather = document.querySelector('.weather-condition');
  weather.textContent = data.currentConditions.conditions.toUpperCase();

  //UPDATE LAT AND LON
  const lat = document.querySelector('.latitude');
  const lon = document.querySelector('.longitude');

  const latitude = data.latitude;
  const longitude = data.longitude;

  const latDirection = latitude >= 0 ? 'N' : 'S';
  const lonDirection = longitude >= 0 ? 'E' : 'W';

  lat.textContent = `${Math.abs(latitude).toFixed(4)}° ${latDirection}`;
  lon.textContent = `${Math.abs(longitude).toFixed(4)}° ${lonDirection}`;
}

//FUNCTION TO CONVERT FARENHEIT TO CELCIUS
function convert(temp) {
  return ((temp - 32) * 5) / 9;
}

// ADD EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  renderUI();
  const input = document.querySelector('.search-field');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', () => {
    const inputVal = input.value.trim();
    if (inputVal) {
      getWeatherData(inputVal);
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const inputVal = input.value.trim();
      if (inputVal) {
        getWeatherData(inputVal);
      }
    }
  });
});

getWeatherData('New York');
