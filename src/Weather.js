import React, { useState } from "react";
import FormattedDate from "./FormattedData";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container con-margin">
        <div className="con-width">
          <div className="row">
            <div className="col-6 date" id="date">
              <FormattedDate date={weatherData.date} />
            </div>
            <div className="col-6 ">
              <nav className="navbar navbar-margin ">
                <form
                  onSubmit={handleSubmit}
                  className="form-inline  "
                  id="search-form"
                >
                  <input
                    onChange={handleCityChange}
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search City"
                    aria-label="Search"
                    id="search-city"
                  />
                  <button
                    className="btn btn-outline-primary my-2 my-sm-0 btn-margin "
                    type="submit"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    button
                    id="current-location"
                  >
                    Current city
                  </button>
                </form>
              </nav>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
        <a href="https://github.com/HinaChoudhry/react-weather-app">Project</a>{" "}
        by Hina Choudhry
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
