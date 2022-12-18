import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Search from "./../Search/Search";
import WeatherCurrent from "./WeatherCurrent/WeatherCurrent";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherConditions from "./WeatherConditions/WeatherConditions";
import WeatherForecast from "./WeatherForecast/WeatherForecast";

import "./weather.scss";

const Weather = () => {
    
    const [ city, setCity ] = useState("Novosibirsk");

    console.log("render");
    
    return (
        <div className="weather-grid" >
            <Sidebar />
            <div>
                <Search setCity={setCity}/>
                <div className="weather__wrapper">
                    <WeatherCurrent/>
                    <WeatherToday/>
                    <WeatherConditions/>
                </div>
            </div>
            <WeatherForecast/>
        </div>
    )
}

export default Weather;