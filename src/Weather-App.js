import React from "react";
import "./Weather-App.css"

export default function Weather() {
    return (
        <div className="Weather">
            <h2>Orkney, North West</h2>
            <p>
                Monday, 6:10am
            </p>
            <br />
            <div className="row">
                <div className="col-4">
                    <span>
                        <img src="https://r.bing.com/rp/sdSac_zQw5gLMvPI61xKmFWSP1c.svg" alt="Cloud" /> <br /> <span className="description">mostly cloudy</span>
                    </span>
                </div>
                    <div className="col-4">
                    <span>
                        <p className="temp">18<span className="celcius"><a href="/">°C</a> | <a href="/">F</a></span></p>
                    </span>
                    </div>
                <div className="col-4">
                    <span>
                        <p className="deatils">Humidity: <strong>93</strong>% <br /> Wind: <strong>64</strong>km/h</p>
                    </span>
                </div>
            </div>
        </div>
    );
}