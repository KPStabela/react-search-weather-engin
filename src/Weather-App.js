import React from "react";
import "./Weather-App.css"

export default function Weather() {
    return (
        <div className="Weather">
            <h2>Orkney, North West</h2>
            <p>
                Monday, 6:10am
            </p>
            <div className="row">
                <div className="col-4">
                    <div>
                        <img src="https://r.bing.com/rp/sdSac_zQw5gLMvPI61xKmFWSP1c.svg" alt="Cloud" /> <br />cloudy
                    </div>
                </div>
                    <div className="col-4">
                    <div>
                        <p>18°C</p>
                    </div>
                    </div>
                <div className="col-4">
                    <div>
                        <p>Humidity: <strong>93</strong>% <br /> Wind: <strong>64</strong>km/h</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}