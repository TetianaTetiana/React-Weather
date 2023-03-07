import React from "react";
import './App.css';

function WFDay(props){
    const srcIcon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    const Day = () => {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        return days[day];
    }

    return(
    <div className="footer-row">
        <ul className="list">
            <li className="item">
                <div>{Day()}</div>
                <img src={srcIcon} alt={props.data.description} />
                <span>{Math.round(props.data.temp.max)}° |</span>
                <span> {Math.round(props.data.temp.min)}°</span>
            </li>
        </ul>
    </div>
    )
}

export default WFDay;