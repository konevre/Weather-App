import { useEffect, useState } from "react";

import weatherService from "../../services/apiRequest";

import Sidebar from "../Sidebar/Sidebar";
import Search from "./../Search/Search";
import WeatherCurrent from "./WeatherCurrent/WeatherCurrent";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherConditions from "./WeatherConditions/WeatherConditions";
import WeatherForecast from "./WeatherForecast/WeatherForecast";

import "./weather.scss";


const Weather = () => {

    const { requestCurrent, requestToday, requestForecast } = weatherService();

    const [ weatherCurrent, setWeatherCurrent ] = useState({});
    const [ weatherToday, setWeatherToday ] = useState([]);
    const [ weatherForecast, setWeatherForecast ] = useState([]);
    const [ city, setCity ] = useState("Novosibirsk");

    useEffect(() => {
        updateWeather(city);
    }, [city])

    const updateWeather = (city) => {
        requestCurrent(city)
            .then(currentLoaded);
        requestToday(city)
            .then(todayLoaded);
        requestForecast(city)
            .then(forecastLoaded);
    }

    const currentLoaded = (response) => {
        setWeatherCurrent(response);
    }

    const todayLoaded = (response) => {
        setWeatherToday(response);
    }

    const forecastLoaded = (response) => {
        setWeatherForecast(response);
    }

    console.log("render");
    
    return (
        <div className="weather-grid" >
            <Sidebar />
            <div>
                <Search setCity={setCity}/>
                <div className="weather__wrapper">
                    <WeatherCurrent weatherCurrent={weatherCurrent}/>
                    <WeatherToday weatherToday={weatherToday}/>
                    <WeatherConditions weatherCurrent={weatherCurrent}/>
                </div>
            </div>
            <WeatherForecast weatherForecast={weatherForecast}/>
        </div>
    )
}

export default Weather;