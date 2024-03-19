import React, { useState } from "react";
import "./Weather-App.css"
import WeatherInfo from "./WeatherInfo"
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            Temperature: response.data.main.temp,
            Humidity: response.data.main.humidity,
            Date: new Date(response.data.dt * 1000),
            Description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            Wind: response.data.wind.speed,
            city: response.data.name
        });
    };

    function search() {
        const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <div className="Form">
            <form onSubmit={handleSubmit} name="search-field">
              <input type="search" placeholder="Enter a city..." className="field-search" autoFocus="on" name="search-field" onChange={handleCityChange}/>
              <input type="Submit" value="Search" className="btn-search btn-primary " name="search-field"/>
            </form>
           </div> 
           <WeatherInfo data={weatherData} />
           </div>
        );
    } else {
        search();

        return "Loading...";
    }
}