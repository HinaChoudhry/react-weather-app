import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="current-temp" className="temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="unit">
          <small>
            {" "}
            c|
            <a href="/" onClick={showFahrenheit}>
              f
            </a>
          </small>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span id="current-temp" className="temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="unit">
          <small>
            {" "}
            <a href="/" onClick={showCelsius}>
              c
            </a>
            | f
          </small>
        </span>
      </div>
    );
  }
}
