
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-row">
        <form id="search-form" action="">
            <input id="search-text-input" type="search" placeholder="Enter a city" />
            <input class="submit" type="submit" value="Search" />
            <button class="real-temp">Current</button>
        </form>
          <div class="temp">
            <p class="temperature">0</p>
            <span class="units celsium current"> °C </span>
            <span class="units fahrenheit off"> °F </span>
        </div>
      </div>
        <p class="weather-description">Clear sky</p>
        <div class="middle-row">
            <div class="content">
                <h1>
                    City, Country
                </h1>
                <h2>
                    Day, time
                </h2>
                <p class="wind">
                    wind speed&nbsp;&nbsp;&nbsp;&nbsp;0 m/s
                </p>
                <p class="features">
                    humidity&nbsp;&nbsp;&nbsp;&nbsp;0%<br />
                </p>
            </div>
            <img class="img" src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" alt="weather-icon"></img>
        </div>
        <div class="footer-row">
            <ul class="list">
              <li class="item">
                <div>Mon</div>
                <p>🌤</p>
                <span>10°C|</span>
                <span>12°C</span>
              </li>
              <li class="item">
                <div>Mon</div>
                <p>🌤</p>
                <span>10°C|</span>
                <span>12°C</span>
              </li>
              <li class="item">
                <div>Mon</div>
                <p>🌤</p>
                <span>10°C|</span>
                <span>12°C</span>
              </li>
              <li class="item">
                <div>Mon</div>
                <p>🌤</p>
                <span>10°C|</span>
                <span>12°C</span>
              </li>
              <li class="item">
                <div>Mon</div>
                <p>🌤</p>
                <span>10°C|</span>
                <span>12°C</span>
              </li>
            </ul>
        </div>
        <p class="githublink">Coded by Tetiana Karpenko. Open-sourced on <a href="https://github.com/TetianaTetiana/WeatherApp/tree/weather-app">GitHub</a></p>
    </div>
  );
}
export default App;
