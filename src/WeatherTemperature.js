import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span id="current-temp" className="temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="unit">
        <small> c</small>
      </span>
    </div>
  );
}
