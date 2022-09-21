import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="container con-margin">
      <div className="con-width">
        <div className="row">
          <div className="col-6 date" id="date">
            {props.date}
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
                <h1 id="current-city">{props.city}</h1>
              </li>
              <li>
                <h2>
                  <span id="current-temp">{props.temperature}</span>
                  <small>c</small>
                </h2>
              </li>
              <li>
                <h5 id="weather-summary">{props.conditions}</h5>
              </li>
              <li>
                <h5 id="wind-speed">{props.windSpeed}</h5>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
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
            {props.day}
            <br />
            {props.forecastTemp}c
          </div>
        </div>
        &nbsp;
      </div>
      <a href="https://github.com/HinaChoudhry/weather-app">Project</a> by Hina
      Choudhry
    </div>
  );
}
