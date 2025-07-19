const hum = document.getElementById('humidity');
const temp = document.getElementById('temperature');
const wind = document.getElementById('wind');
const decs = document.getElementById('description');
const city = document.getElementById('city');
const county = document.getElementById('country');
const image = document.getElementById('image');
const back = document.getElementById('back')
function show(){
  let cityName = city.value.trim();
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd8c52c76d9e343660e6bdb0de96aa24&units=metric`)
.then(res => res.json())
.then(data => {
  country.innerHTML = data.name;
humidity.innerHTML = data.main.humidity + "%";
temp.innerHTML = Math.round(data.main.temp) + "°C";
wind.innerHTML = data.wind.speed + "m/s";
decs.innerHTML = data.weather[0]. description;
if (data.weather[0].main == "Clouds") {
  image.src = 'clouds.png'
} else if (data.weather[0].main == "Snow") {
  image.src = 'snow.png'
} else if (data.weather[0].main == "Mist") {
  image.src = 'mist.png'
} else if (data.weather[0].main == "Rain") {
  image.src = 'rain.png'
} else if (data.weather[0].main == "Clear") {
  image.src = 'clear.png';
} else if (data.weather[0].main == "Dizzle") {
  image.src = 'dizzle.png';
}
})

.catch(error => {
  country.innerHTML = 'Invalid State/City';
  temp.innerHTML = '...';
  wind.innerHTML = '....';
  decs.innerHTML = '....';
  humidity.innerHTML = '...'
})
city.value = "";
}


const background = [ 
  "url('bg.jpeg')",
  "url('rainny.jpeg')",
  "url('iceday.jpeg')",
  "url('windday.jpeg')",
  "url('sunny.jpeg')"
];

let index = 0;
setInterval(() => {
  back.style.backgroundImage = background [index];
  index = [index + 1 ] % background.length;
  back.style.transition = '3s ease out-in-out';
},3000);