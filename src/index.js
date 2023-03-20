
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${28} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

let apiKey = "e7be0e09c2bc8e3d45069a7681cd06a3";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kampala=${city}&appid=${apiKey}&units=${units}`;

axios.get(apiUrl).then(showTemperature);

function showPosition(position){
  console.log(position.coords.latitude.longitude)
  
}

navigator.geolocation.getCurrentPosition(showPosition)