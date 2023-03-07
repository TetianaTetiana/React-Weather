import React from "react";
import './App.css';
import axios from "axios";

function WeatherDailyForecast(props) {
    const handleResp = (resp) => {
        // console.log(resp.data);
    }

    let apiKey = 'b400ae3b711a616262d18b0ca2cbe78f';
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResp);

    return (
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
    )
}

export default WeatherDailyForecast;