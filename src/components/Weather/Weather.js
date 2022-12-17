import { useEffect, useState } from "react";
import moment from 'moment';

import weatherService from "../../services/apiRequest";
import { useGetCurrentWeatherQuery } from "../../api/apiSlice";

import Sidebar from "../Sidebar/Sidebar";
import Search from "./../Search/Search";
import WeatherCurrent from "./WeatherCurrent/WeatherCurrent";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherConditions from "./WeatherConditions/WeatherConditions";
import WeatherForecast from "./WeatherForecast/WeatherForecast";

import "./weather.scss";

const Weather = () => {

    const  {
        data: currentWeather,
        isFetching, // после первой загрузки
        isLoading, // только первая загрузка
        isSuccess,
        isError,
        error
    } = useGetCurrentWeatherQuery("Novosibirsk")

    

    // const transformCurrent = (data) => {
    //     return {
    //         name: data.name,
    //         temp: Math.round(data.main.temp),
    //         feel: Math.round(data.main.feels_like),
    //         humidity: data.main.humidity,
    //         wind: data.wind.speed,
    //         icon: data.weather[0].icon,
    //         visibility: data.visibility / 1000,
    //         time: moment().utcOffset(data.timezone / 60).format("HH:mm")
    //     }
    // }

    // before RTK
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