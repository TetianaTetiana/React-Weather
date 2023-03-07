import React, {useState} from "react";
import axios from "axios";
import FormattedDate from './FormattedDate';
import WeatherTemp from './WeatherTemp';
import WeatherDailyForecast from './WeatherDailyForecast';
import './App.css';

function App(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});
  const handleResp = (resp) => {
    // console.log(resp.data);
    setWeatherData({
      time: "12:00",
      date: new Date(resp.data.dt * 1000),
      coord: resp.data.coord,
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

  const search = () => {
    const apiKey = "33efe89f103feda08ec5412af8a983d6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResp);
  }
const handleSubmit = (event) => {
  event.preventDefault();
  search();
}
const handleCityChange = (event) => {
  setCity(event.target.value);
}

  if(ready){
    return (
      <div>
        <div className="App">
          <div className="top-row">
            <form id="search-form" action="" onSubmit={handleSubmit}>
                <input
                id="search-text-input"
                type="search"
                placeholder="Enter a city"
                onChange={handleCityChange}/>
                <input className="submit" type="submit" value="Search" />
                {/* <button className="real-temp">Current</button> */}
            </form>
            <WeatherTemp celsius={weatherData.temperature}/>
          </div>
            <p className="weather-description">{weatherData.weatherDesc}</p>
            <div className="middle-row">
                <div className="content">
                    <h1>
                        {weatherData.city}
                    </h1>
                    < FormattedDate date={weatherData.date}/>
                    <p className="wind">
                        wind speed&nbsp;&nbsp;&nbsp;&nbsp;{weatherData.wind} m/s
                    </p>
                    <p className="features">
                        humidity&nbsp;&nbsp;&nbsp;&nbsp;{weatherData.humidity}%<br />
                    </p>
                </div>
                <img className="img" src={weatherData.iconUrl} alt={weatherData.description}></img>
            </div>
            <WeatherDailyForecast coordinates={weatherData.coord}/>
        </div>
        <p className="githublink">Coded by Tetiana Karpenko. Open-sourced on <a href="https://github.com/TetianaTetiana" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    );
  }else{
    search();
    return "Loading data..."
  }
}
export default App;
