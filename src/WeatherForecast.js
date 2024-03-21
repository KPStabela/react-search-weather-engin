import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
/* eslint-disable-next-line no-unused-vars */
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let apiKey = "6a48a550fc04f170639e60d52b8a6bc5";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   
       axios.get(apiUrl).then(handleResponse);        
    }

    if (loaded) {
      return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast,index) {
                    if (index < 5) {
                     return (
                        <div className="col forecast-divider" key={index}>
                         <WeatherForecastDay data={dailyForecast} />
                        </div>
                     );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );      
    } else {
        load();
       
       return null;
    }
}