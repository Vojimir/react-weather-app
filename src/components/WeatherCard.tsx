import "./WeatherCard.css";
interface Props {
  weatherData: {
    name: string;
    main: { temp: number; humidity: number };
    weather: [{ description: string }];
    wind: { speed: number };
  };

  changeUnits: () => void;
  tempUnicode: string;
  weatherIcon: string;
  windUnits: string;
}
const WeatherCard: React.FC<Props> = ({ ...props }: Props) => {
  // const { name, main, weather, wind } = props.weatherData;

  return (
    <div id="weather_wrapper" onClick={props.changeUnits}>
      <div className="weatherCard">
        <div className="currentTemp">
          <span className="temp">
            {props.weatherData.main.temp.toFixed(0)}&deg;{props.tempUnicode}
          </span>
          <span className="description">
            {props.weatherData.weather[0].description}
          </span>
          <span className="location">{props.weatherData.name}</span>
        </div>
        <div className="currentWeather">
          <div className={`iconImage ${props.weatherIcon}`}></div>
          <div className="info">
            <span className="rain">{props.weatherData.main.humidity} %</span>
            <span className="wind">
              {props.weatherData.wind.speed} {props.windUnits}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
