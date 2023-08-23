import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    temp: "12",
    description: "clear",
    pressure: "1017",
    humidity: "80",
    wind: "15 ",
    img: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
  };
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-4 first-col">
          <div className="temp">
            <span className="temp-id">{weatherData.temp}</span>
            <br />
            <span className="description-id">{weatherData.description}</span>
            <div className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              |°
              <a href="/">F</a>
            </div>
          </div>
          <div className="details">
            <div className="pressure">
              Pressure:<span></span>
              {weatherData.pressure}mbar
            </div>
            <div className="Humidity">
              Humidity:<span></span>
              {weatherData.humidity}%
            </div>
            <div className="wind">
              Wind:<span></span>
              {weatherData.wind}km/h
            </div>
          </div>

          <div className="location-btn">
            <button type="button" className="btn btn-primary current-location">
              Current Location
            </button>
          </div>
        </div>
        <div className="col-4 second-col">
          <img src={weatherData.img} alt="" className="weather-icon" />
          <h1 className="city-name">{weatherData.city}</h1>
          <h2 className="date"> </h2>
          <div className="search">
            <form>
              <div className="search-form">
                <input
                  type="search"
                  className="form-control"
                  //   id="input-search-city"
                  placeholder="Search for a city"
                  autocomplete="off"
                />
              </div>
              <button
                type="submit"
                value="search"
                className="btn btn-primary search-btn"
              >
                🔍
              </button>
            </form>
          </div>
        </div>
        <div className="col-4 third-col">
          <div className="forecasts"></div>
        </div>
      </div>
    </div>
  );
}
