import { useSelector } from "react-redux";

import { transformCurrent } from "../../../utils/utils";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import WeatherCurrentSkeleton from "./WeatherCurrentSkeleton";

import "./weatherCurrent.scss"

const WeatherCurrent = () => {

    const { activeCity } = useSelector(state => state.weather);
    // get current GEOLOCATION
    // const successCallback = (position) => {
    //     console.log(position);
    //   };
    //   const errorCallback = (error) => {
    //     console.log(error);
    //   };
    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    const {
        data: currentWeather,
        isSuccess,
    } = useGetCurrentWeatherQuery(activeCity);

    
    if (isSuccess) {
        const { name, time, temp, icon } = transformCurrent(currentWeather);
        const path = icon ? icon : "00";

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
    } else {
        return (
            <WeatherCurrentSkeleton/>
        )
    }
}

export default WeatherCurrent;