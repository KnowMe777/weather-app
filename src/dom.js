import './style.css';

export default function renderUI() {
  const container = document.querySelector('.container');

  //INPUT ELEMENT FOR SEARCH OPTIONS
  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  const searchField = document.createElement('input');
  searchField.setAttribute('placeholder', 'Search Your Location');
  searchField.type = 'text';
  searchField.id = 'search';
  searchField.classList.add('search-field');

  const searchBtn = document.createElement('button');
  searchBtn.classList.add('search-btn');
  searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-location"></i>';

  inputDiv.appendChild(searchField);
  inputDiv.appendChild(searchBtn);
  container.appendChild(inputDiv);

  //ELEMENT FOR TEMP. DISPLAY
  const tempDiv = document.createElement('div');
  tempDiv.classList.add('temp-div');

  const temp = document.createElement('h1');
  temp.classList.add('temp');
  temp.textContent = '';

  const sign = document.createElement('p');
  sign.classList.add('sign');
  sign.textContent = '°';

  tempDiv.appendChild(temp);
  tempDiv.appendChild(sign);
  container.appendChild(tempDiv);

  //ELEMENTS FOR WEATHER CONDITION
  const weatherDiv = document.createElement('div');
  weatherDiv.classList.add('weather-div');

  const weatherCondition = document.createElement('p');
  weatherCondition.classList.add('weather-condition');
  weatherCondition.textContent = '';

  weatherDiv.appendChild(weatherCondition);
  container.appendChild(weatherDiv);

  //ELEMENTS FOR DISPLAYING LOCATION
  const locationDiv = document.createElement('div');
  locationDiv.classList.add('location-div');

  const location = document.createElement('p');
  location.classList.add('location');
  location.textContent = '';

  locationDiv.appendChild(location);
  container.appendChild(locationDiv);

  //ELEMENTS FOR DISPLAYING COORDINATES
  const coordinateDiv = document.createElement('div');
  coordinateDiv.classList.add('coordinate-div');

  const lattitude = document.createElement('p');
  lattitude.classList.add('latitude');
  lattitude.textContent = '';

  const longitude = document.createElement('p');
  longitude.classList.add('longitude');
  longitude.textContent = '';

  coordinateDiv.appendChild(lattitude);
  coordinateDiv.appendChild(longitude);
  container.appendChild(coordinateDiv);
}
