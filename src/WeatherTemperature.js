import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("Fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
            <span>
                <p className="temp">{Math.round(props.celsius)}<span className="unit">°C |{" "} <a href="/" onClick={showFahrenheit}>°F</a></span></p>
            </span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <div className="WeatherTemperature">
            <span>
                <p className="temp">{Math.round(fahrenheit)}<span className="unit"><a href="/" onClick={showCelsius}>°C</a>{" "} | °F</span></p>
            </span>
            </div>
        );
    }
}