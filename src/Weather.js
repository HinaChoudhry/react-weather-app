import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      date: "Tuesday",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container con-margin">
        <div className="con-width">
          <div className="row">
            <div className="col-6 date" id="date">
              {weatherData.date}
            </div>
            <div className="col-6 ">
              <nav className="navbar navbar-margin ">
                <form className="form-inline  " id="search-form">
                  <input
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
          <div className="row">
            <div className="col-6 weather-margin weather-temperature">
              <ul>
                <li>
                  <h5>Current city</h5>
                </li>
                <li>
                  <h1 id="current-city">{weatherData.city}</h1>
                </li>
                <li>
                  <h2>
                    <span id="current-temp">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <small>c</small>
                  </h2>
                </li>
                <li>
                  <h5 id="weather-summary" className="text-capitalize">
                    Conditions: {weatherData.description}
                  </h5>
                </li>
                <li>
                  <h5 id="wind-speed" className="text-capitalize">
                    Wind speed: {Math.round(weatherData.wind)}km/h
                  </h5>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt="The Sun"
                width="200"
                id="icon"
              />
            </div>
          </div>
          <div className="forecast-margin">
            <p>Forecast for the next six days</p>
          </div>
          <div className="row justify-content-center" id="forecast">
            <div class="col-sm-2">
              ☀️
              <br />
              <br />c
            </div>
          </div>
          &nbsp;
        </div>
        <a href="https://github.com/HinaChoudhry/react-weather-app">
          Project
        </a>{" "}
        by Hina Choudhry
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
