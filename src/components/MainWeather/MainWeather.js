import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";

class MainWeather extends Component {
  state = {
    temperature: null,
    humidity: null,
    windSpeed: null,
    city: null,
    weatherDescription: null,
    weatherId: null,
    weatherIcon: null,
    units: "metric",
    windUnits: "M/S",
    errors: null,
  };

  fetchData = (units = this.state.units) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=789128&units=${units}&appid=38f4a841f86814f23ddee9d9f130fd77`
      )
      .then((response) => {
        this.setState(
          {
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            city: response.data.name,
            weatherDescription: response.data.weather[0].main,
            weatherId: response.data.weather[0].id,
            units,
            windUnits: units === "metric" ? "M/S" : "MPH",
          },
          this.weatherIconHandler(response.data.weather[0].id)
        );
      })

      .catch((e) => {
        this.setState({ errors: e });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  toggleMeasurementUnit = () => {
    this.fetchData(this.state.units === "metric" ? "imperial" : "metric");
  };
  weatherIconHandler = (weatherId = this.state.weatherId) => {
    const idNumber = weatherId;
    let iconId = null;
    if (idNumber >= 800) {
      iconId = "clouds";
    } else if (idNumber >= 600 && idNumber < 800) {
      iconId = "snow";
    } else if (idNumber >= 500 && idNumber < 600) {
      iconId = "rain;";
    } else if (idNumber >= 200 && idNumber < 300) {
      iconId = "thunder;";
    } else {
      iconId = "clear";
    }

    this.setState({ weatherIcon: iconId });
  };
  render() {
    return (
      <WeatherCard
        city={this.state.city}
        temp={this.state.temperature}
        humidity={this.state.humidity}
        windSpeed={this.state.windSpeed}
        weatherDesc={this.state.weatherDescription}
        windUnits={this.state.windUnits}
        weatherIcon={this.state.weatherIcon}
        clicked={this.toggleMeasurementUnit}
      ></WeatherCard>
    );
  }
}

export default MainWeather;
