import React, { useState } from "react";
import "./Weather-App.css"
import FormattedDate from "./FormattedDate"
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            Temperature: response.data.main.temp,
            Humidity: response.data.main.humidity,
            Date: new Date(response.data.dt * 1000),
            Description: response.data.weather[0].description,
            iconUrl: "https://r.bing.com/rp/sdSac_zQw5gLMvPI61xKmFWSP1c.svg",
            Wind: response.data.wind.speed,
            city: response.data.name
        });
    };

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <div className="Form">
            <form>
              <input type="search" placeholder="Enter a city..." className="field-search" autoFocus="on" />
              <input type="Submit" value="Search" className="btn-search btn-primary " />
            </form>
           </div> 
               <h2>{weatherData.city}</h2>
               <p>
                 <FormattedDate date={weatherData.Date} />
               </p>
               <br />
               <div className="row">
                   <div className="col-4">
                       <span>
                           <img src={weatherData.iconUrl} alt="Cloud" /> <br /> <span className="description text-capitalize">{weatherData.Description}</span>
                       </span>
                   </div>
                       <div className="col-4">
                       <span>
                           <p className="temp">{Math.round(weatherData.Temperature)}<span className="celcius">°C</span></p>
                       </span>
                       </div>
                   <div className="col-4">
                       <span>
                           <p className="deatils"><br />Humidity: <strong>{weatherData.Humidity}</strong>% <br /> Wind: <strong>{weatherData.Wind}</strong>km/h</p>
                       </span>
                   </div>
               </div>
           </div>
        );
    } else {
          const apiKey = "9cb72bec958f8fb02391985ed7b219d2";
          let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
          axios.get(apiUrl).then(handleResponse);

          return "Loading...";
    }
}