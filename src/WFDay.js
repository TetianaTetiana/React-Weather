import React from "react";
import WeatherIcon from "./WeatherIcon";
import './App.css';

function WFDay(props){
    const Day = () => {
        let date = new Date(props.data.dt * 1000)
        let day = date.getDay();
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];
        return days[day];
    }

    return(
    <div className="footer-row">
        <ul className="list">
            <li className="item">
                <div>{Day()}</div>
                <div className="picture">
                    <WeatherIcon code={props.data.weather[0].icon} size={40}/>
                </div>
                <span>{Math.round(props.data.temp.max)}° |</span>
                <span> {Math.round(props.data.temp.min)}°</span>
            </li>
        </ul>
    </div>
    )
}

export default WFDay;