import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather
        date="Tuesday, 28th June 2022"
        city="London"
        temperature={20}
        conditions="Current conditions: Sunny"
        windSpeed="Wind speed: 1km/h"
        day="Monday"
        forecastTemp={20}
      />
    </div>
  </StrictMode>
);
