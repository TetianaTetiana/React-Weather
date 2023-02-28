import React, {useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const handleResp = (resp) => {
    console.log(resp.data);
    setWeatherData({
      time: "12:00",
      date: "monday",
      temperature: resp.data.main.temp,
      humidity: resp.data.main.humidity,
      weatherDesc: resp.data.weather[0].description,
      wind: resp.data.wind.speed,
      city: resp.data.name,
      iconUrl: `https://openweathermap.org/img/wn/${resp.data.weather[0].icon}@2x.png`,
      description: resp.data.weather[0].description,
    })
    setReady(true);
  }

  if(ready){
    return (
      <div className="App">
        <div className="top-row">
          <form id="search-form" action="">
              <input id="search-text-input" type="search" placeholder="Enter a city" />
              <input className="submit" type="submit" value="Search" />
              <button className="real-temp">Current</button>
          </form>
            <div className="temp">
              <p className="temperature">{Math.round(weatherData.temperature)}</p>
              <span className="units celsium current"> °C </span>
              <span className="units fahrenheit off"> °F </span>
          </div>
        </div>
          <p className="weather-description">{weatherData.weatherDesc}</p>
          <div className="middle-row">
              <div className="content">
                  <h1>
                      {weatherData.city}
                  </h1>
                  <h2>
                      {weatherData.date}, {weatherData.time}
                  </h2>
                  <p className="wind">
                      wind speed&nbsp;&nbsp;&nbsp;&nbsp;{weatherData.wind} m/s
                  </p>
                  <p className="features">
                      humidity&nbsp;&nbsp;&nbsp;&nbsp;{weatherData.humidity}%<br />
                  </p>
              </div>
              <img className="img" src={weatherData.iconUrl} alt={weatherData.description}></img>
          </div>
          <div className="footer-row">
              <ul className="list">
                <li className="item">
                  <div>Mon</div>
                  <p>🌤</p>
                  <span>10°C|</span>
                  <span>12°C</span>
                </li>
                <li className="item">
                  <div>Mon</div>
                  <p>🌤</p>
                  <span>10°C|</span>
                  <span>12°C</span>
                </li>
                <li className="item">
                  <div>Mon</div>
                  <p>🌤</p>
                  <span>10°C|</span>
                  <span>12°C</span>
                </li>
                <li className="item">
                  <div>Mon</div>
                  <p>🌤</p>
                  <span>10°C|</span>
                  <span>12°C</span>
                </li>
                <li className="item">
                  <div>Mon</div>
                  <p>🌤</p>
                  <span>10°C|</span>
                  <span>12°C</span>
                </li>
              </ul>
          </div>
          <p className="githublink">Coded by Tetiana Karpenko. Open-sourced on <a href="https://github.com/TetianaTetiana">GitHub</a></p>
      </div>
    );
  }else{
    const apiKey = "33efe89f103feda08ec5412af8a983d6";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResp);

    return "Loading data..."
  }
}
export default App;
