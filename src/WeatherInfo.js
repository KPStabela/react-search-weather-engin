import React from "react";
import FormattedDate from "./FormattedDate";

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
                       <span>
                           <img src={props.data.iconUrl} alt="Cloud" /> <br /> <span className="description text-capitalize">{props.data.Description}</span>
                       </span>
                   </div>
                       <div className="col-4">
                       <span>
                           <p className="temp">{Math.round(props.data.Temperature)}<span className="celcius">°C</span></p>
                       </span>
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