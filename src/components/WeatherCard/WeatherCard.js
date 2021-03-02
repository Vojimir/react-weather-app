import React from "react";
import "./WeatherCard.css";

const weatherCard = (props) => {
  return (
    <div id="weather_wrapper" onClick={props.clicked}>
      <div className="weatherCard">
        <div className="currentTemp">
          <span className="temp">{props.temp}&deg;</span>
          <span className="description">{props.weatherDesc}</span>
          <span className="location">{props.city}</span>
        </div>
        <div className="currentWeather">
          <div className={`iconImage ${props.weatherIcon}`}></div>
          <div className="info">
            <span className="rain">{props.humidity} %</span>
            <span className="wind">
              {props.windSpeed} {props.windUnits}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherCard;
