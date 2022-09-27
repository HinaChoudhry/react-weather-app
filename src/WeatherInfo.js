import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 weather-margin weather-temperature">
          <ul>
            <li>
              <h5>Current city</h5>
            </li>
            <li>
              <h1 id="current-city">{props.data.city}</h1>
            </li>
            <li>
              <h2>
                <span id="current-temp">
                  {Math.round(props.data.temperature)}
                </span>
                <small>c</small>
              </h2>
            </li>
            <li>
              <h5 id="weather-summary" className="text-capitalize">
                Conditions: {props.data.description}
              </h5>
            </li>
            <li>
              <h5 id="wind-speed" className="text-capitalize">
                Wind speed: {Math.round(props.data.wind)}km/h
              </h5>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src={props.data.iconUrl} alt="The Sun" width="200" id="icon" />
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
  );
}
