import { useState, useEffect } from "react";
import useFetchApiData from "../hooks/useFetchApiData";
import WeatherCard from "./WeatherCard";
import CityInputField from "./CityInputField";
import ErrorModal from "./UI/errorModal";
import "./Weather.css";
const Weather = () => {
  const { data, errors, setUrl } = useFetchApiData(null);
  const [units, setUnits] = useState("metric");
  const [windUnits, setWindUnits] = useState("M/S");
  const [tempUnicode, setTempUnicode] = useState("C");
  const [city, setCity] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("clear");
  const [error, setError] = useState(null);

  const searchHandler = (city) => {
    setCity(city);
    setUrl(
      `/data/2.5/weather?q=${city}&appid=38f4a841f86814f23ddee9d9f130fd77&units=${units}`
    );
  };
  const unitsHandler = () => {
    if (units === "metric") {
      setUnits("imperial");
      setWindUnits("MPH");
      setTempUnicode("F");
      setUrl(
        `/data/2.5/weather?q=${city}&appid=38f4a841f86814f23ddee9d9f130fd77&units=imperial`
      );
    } else {
      setUnits("metric");
      setWindUnits("M/S");
      setTempUnicode("C");
      setUrl(
        `/data/2.5/weather?q=${city}&appid=38f4a841f86814f23ddee9d9f130fd77&units=metric`
      );
    }
  };

  useEffect(() => {
    setError(errors);
    weatherIconHandler();
  }, [data, errors]);

  const weatherIconHandler = () => {
    if (data) {
      const idNumber = 500;
      let weatherIcon = null;
      if (idNumber >= 800) {
        weatherIcon = "clouds";
      } else if (idNumber >= 600 && idNumber < 800) {
        weatherIcon = "snow";
      } else if (idNumber >= 500 && idNumber < 600) {
        weatherIcon = "rainy";
      } else if (idNumber >= 200 && idNumber < 300) {
        weatherIcon = "thunder;";
      } else {
        weatherIcon = "clear";
      }
      setWeatherIcon(weatherIcon);
    }
  };
  const clearErrors = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal onClose={clearErrors}>{error}</ErrorModal>}
      <CityInputField onSearch={searchHandler} />
      {data ? (
        <WeatherCard
          tempUnicode={tempUnicode}
          weatherIcon={weatherIcon}
          weatherData={data}
          changeUnits={unitsHandler}
          windUnits={windUnits}
        />
      ) : (
        <div className="warningDiv">Hello! Please enter city name</div>
      )}
    </>
  );
};

export default Weather;
