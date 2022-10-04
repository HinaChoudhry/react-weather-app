import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Thu
          <div className="WeatherForecast-day">
            <WeatherIcon code="01d" size={55} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">19</span>
              <span className="WeatherForecast-temperature-min">10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
