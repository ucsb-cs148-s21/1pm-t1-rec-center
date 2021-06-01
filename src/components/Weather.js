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

class Weather extends Component {
    state = {
        weather: weather,
        icon: icon,
        temperature: temperature
    }

    componentDidMount(){
        axios.get("https://api.openweathermap.org/data/2.5/weather?" + new URLSearchParams(params)).then(res => {
        weather = res.data.weather[0].description.charAt(0).toUpperCase() + res.data.weather[0].description.slice(1);
        icon = res.data.weather[0].icon;
        console.log("weather data: ", res.data.weather[0]);
        temperature = res.data.main.temp;
        console.log("recorded temp: ",temperature);
        temperature = Math.round(((temperature-273.15)*1.8)+32);
        console.log("converted temp: ",temperature);
        this.setState({weather: res.data.weather[0].description.charAt(0).toUpperCase() + res.data.weather[0].description.slice(1)})
        this.setState({temperature: temperature})
        this.setState({icon: res.data.weather[0].icon})
        })
        .catch(err => {
            console.log(err)
        }); 
    }

    render() {
        return (
            <div>
                <p>Current Weather</p>
                <img 
                    src={urlFirst + this.state.icon + urlSecond} 
                    alt="weather icon" 
                />
                <p>{this.state.weather}</p>
                <p>{this.state.temperature}&deg; F</p>
            </div>
        )
    }
}
export default Weather;