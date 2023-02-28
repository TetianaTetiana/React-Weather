import React, {useState} from "react";
import './App.css';

function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");
    const celTemp = Math.round(props.celsius);

    const convertToF = () => {
        setUnit("fahrenheit")
    }
    const convertToC = () => {
        setUnit("celsius")
    }

    if (unit === "celsius") {
        return(
            <div className="temp">
              <p className="temperature">{celTemp}</p>
              <span className="units celsium current"> °C </span>
              <span className="units fahrenheit off" onClick={convertToF}> °F </span>
            </div>
        )
    }else{
        return (
            <div className="temp">
              <p className="temperature">{Math.round(celTemp * 9 / 5 + 32)}</p>
              <span className="units celsium off" onClick={convertToC}> °C </span>
              <span className="units fahrenheit current"> °F </span>
            </div>
        )
    }
}
export default WeatherTemp;