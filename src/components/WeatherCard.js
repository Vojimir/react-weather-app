import "./WeatherCard.css";

const WeatherCard = (props) => {
  const { name, main, weather, wind } = props.weatherData;

  return (
    <div id="weather_wrapper" onClick={props.changeUnits}>
      <div className="weatherCard">
        <div className="currentTemp">
          <span className="temp">
            {main.temp.toFixed(0)}&deg;{props.tempUnicode}
          </span>
          <span className="description">{weather[0].description}</span>
          <span className="location">{name}</span>
        </div>
        <div className="currentWeather">
          <div className={`iconImage ${props.weatherIcon}`}></div>
          <div className="info">
            <span className="rain">{main.humidity} %</span>
            <span className="wind">
              {wind.speed} {props.windUnits}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
