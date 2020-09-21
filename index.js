const cityName=document.querySelector('.Display_city h2');
const EntercityName=document.querySelector('.Display_city input');
const getCity=document.querySelector('.Display_city');
const weather=document.querySelector('.weather');
const weather_Temp=document.querySelector('.weather_Temp span');
const wind=document.querySelector('.wind span');
const Precip=document.querySelector('.Precip span');
const pressure=document.querySelector('.pressure span');
const SvgInfo=document.querySelector('.mainWeatherSvg');
const setCityName=document.querySelector('.Display_city_name')
var weatherInfo={

}
var weatherSvg=[];
document.addEventListener('DOMContentLoaded',()=>{

    EntercityName.addEventListener('click',()=>{
        // cityName.style.display="none";
        // EntercityName.style.display="block";
        EntercityName.focus();
    })
    EntercityName.addEventListener('keydown',({key}) => {
        if (key === "Enter") {
            event.preventDefault();
            var x=EntercityName.value;
            // EntercityName.style.display="none";
            // cityName.style.display="block";
            setCityName.innerText=x;
            
           getWeatherInfo(x);
            
        }
    });
    EntercityName.addEventListener('blur',()=>{
            var x=EntercityName.value;
            // cityName.style.display="block";
            // EntercityName.style.display="none";
            setCityName.innerText=x;
            getWeatherInfo(x);
    })
    
    async function getWeatherInfo(x){
        try {
            setCityName.classList.remove('error');
            var urlData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x}&units=metric&appid=14b8b4e30e62fddc5da82ad3ba8204c9`);
            var data2= await urlData.json();
            // console.log(data2)
            weatherInfo.cityName=data2.name;
            weatherInfo.weatherCond=data2.weather[0].main;
            var a=weatherInfo.weatherCond;
            // console.log(a)
            weatherInfo.temp=data2.main.temp;
            weatherInfo.windSpeed=data2.wind.speed;
            weatherInfo.humidity=data2.main.humidity;
            weatherInfo.pressure=data2.main.pressure;
            var x=fetch("index.json").then((res)=>{
                return res.json();
            }).then((data)=>{
                for(var i in data){
                    if(i==a){
                        SvgInfo.src=data[i];
                        // console.log(SvgInfo);
                    }
                
                }
            });
            
            setWeatherInfo(weatherInfo);
        } catch (error) {
            setCityName.innerText='City Not Found!';
            setCityName.classList.add('error');
        }
        
    }
    function setWeatherInfo(x){
        weather.innerText=x.weatherCond;
        weather_Temp.innerText=x.temp;
        wind.innerText=x.windSpeed;
        Precip.innerText=x.humidity;
        pressure.innerText=x.pressure;
        
    }
    console.log(weatherInfo);
})
"use strict";

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}




