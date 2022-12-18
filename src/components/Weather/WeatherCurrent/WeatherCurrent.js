import { useSelector } from "react-redux";

import { transformCurrent } from "../../../utils/utils";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import WeatherCurrentSkeletonLoading from "./WeatherCurrentSkeletonLoading";
import WeatherCurrentSkeletonError from "./WeatherCurrentSkeletonError";

import "./weatherCurrent.scss"

const WeatherCurrent = () => {

    const { activeCity } = useSelector(state => state.weather);

    const {
        data: currentWeather,
        isSuccess,
        isError,
        isFetching,
        isLoading
    } = useGetCurrentWeatherQuery(activeCity);

    if (isError) {
        return (
            <WeatherCurrentSkeletonError/>
        )
    }

    if (isFetching || isLoading) {
        return (
            <WeatherCurrentSkeletonLoading/>
        )
    }

    

    if (isSuccess) {
        const { name, time, temp, icon } = transformCurrent(currentWeather);
        const path = icon ? icon : "00";
        console.log(activeCity)

        return (
            <div className="weather__current">
                <div className="weather__current-wrapper">
                    <div className="weather__current-city">{name}</div>
                    <div className="weather__current-rain">Last update: {time}</div>
                </div>
                <div className="weather__current-temp">{temp}°</div>
                <div className="weather__current-img">
                    <img src={require(`../../../resources/weather-icons/${path}.svg`)} alt="weather_img" />
                </div>
            </div>
        )
    } 
}

export default WeatherCurrent;