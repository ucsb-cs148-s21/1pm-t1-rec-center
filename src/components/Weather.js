import React, { Component } from 'react';
import axios from 'axios';

const params = new URLSearchParams({ 
    'q': 'Santa Barbara',
    'appid': '6791f1c457a10a3c95aeecff6ce59c0d'
});

let weather = "sunny";
let icon = "01d";
let urlFirst = "http://openweathermap.org/img/wn/";
let urlSecond = "@2x.png";
let temperature = 0;

axios.get("https://api.openweathermap.org/data/2.5/weather?" + new URLSearchParams(params)).then(res => {
        weather = res.data.weather[0].description;
        icon = res.data.weather[0].icon;
        console.log("weather data: ", res.data.weather[0]);
        temperature = res.data.main.temp;
        console.log("recorded temp: ",temperature);
        temperature = Math.round(((temperature-273.15)*1.8)+32);
        console.log("converted temp: ",temperature);
    })
    .catch(err => {
        console.log(err)
    }); 

class Weather extends Component {
    render() { 
        return (
            <div>
                Current Weather: {weather}
                <img 
                    src={urlFirst + icon + urlSecond} 
                    alt="weather icon" 
                />
                Temperature: {temperature}&deg; F
            </div>
        )
    }
}
export default Weather;