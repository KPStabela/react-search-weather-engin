import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
             <h2>{props.data.city}</h2>
               <p>
                 <FormattedDate date={props.data.Date} />
               </p>
               <br />
               <div className="row">
                   <div className="col-4">
                        <WeatherIcon code={props.data.icon} alt={props.data.Description}/> <br /> <span className="description text-capitalize">{props.data.Description}</span>
                   </div>
                       <div className="col-4">
                        <WeatherTemperature celsius={props.data.Temperature} />
                       </div>
                   <div className="col-4">
                       <span>
                           <p className="deatils"><br />Humidity: <strong>{props.data.Humidity}</strong>% <br /> Wind: <strong>{props.data.Wind}</strong>km/h</p>
                       </span>
                   </div>
               </div>
        </div>
    );
}