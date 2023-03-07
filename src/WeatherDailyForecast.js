import React, {useState} from "react";
import './App.css';
import axios from "axios";
import WFDay from './WFDay';

function WeatherDailyForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    const handleResp = (resp) => {
        // console.log(resp.data);
        setForecast(resp.data.daily);
        setLoaded(true);
    }

    if(loaded){
        // console.log(forecast);
        return (
            <WFDay data={forecast[0]}/>
        )
    }else{
        let apiKey = '866a208a73eeff02182218e9441647a1';
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResp);

        return null;
    }
}

export default WeatherDailyForecast;