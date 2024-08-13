const apiKey = "83019c413148b343af7ea9f8547dd20e";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('#search-bar');
   const searchBtn = document.querySelector('#search-btn')
   const weatherImg= document.querySelector('#weatherImg')

async function knowWeather(city){

    const fetchData = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const data= await fetchData.json();
    console.log(data);

   
    
    document.querySelector('#temperature').innerHTML= (Math.round(data.main.temp)) + '°c';
    document.querySelector('#cityName').innerHTML=data.name;
    document.querySelector('.wind-speed').innerHTML= data.wind.speed + 'km/h';
    document.querySelector('#humidity').innerHTML= data.main.humidity +'%';

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/weather-app-img/images/clouds.png";
     }
      else if(data.weather[0].main == "Haze"){
        weatherImg.src = "images/weather-app-img/images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherImg.src = 'images/weather-app-img/images/mist.png'
          }else if(data.weather[0].main == "Rain"){
            weatherImg.src = 'images/weather-app-img/images/rain.png'
          }
          else if(data.weather[0].main == "Snow"){
            weatherImg.src = 'images/weather-app-img/images/snow.png'
          }
          else if(data.weather[0].main == "Clear")
          weatherImg.src = "images/weather-app-img/images/clear.png";


    
    
}
    
searchBtn.addEventListener('click',()=>{
    knowWeather(searchBox.value);
})



