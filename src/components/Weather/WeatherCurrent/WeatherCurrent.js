import { useSelector } from "react-redux";

import { transformCurrent } from "../../../utils/utils";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import WeatherCurrentSkeleton from "./WeatherCurrentSkeleton";

import "./weatherCurrent.scss"

const WeatherCurrent = ({size}) => {

    const { activeCity } = useSelector(state => state.weather);

    const {
        data: currentWeather,
        isSuccess,
        isError,
        isFetching,
        isLoading,
        error
    } = useGetCurrentWeatherQuery(activeCity);

    if (isError) {
        return (
            <WeatherCurrentSkeleton error={error}/>
        )
    }

    if (isFetching || isLoading) {
        return (
            <WeatherCurrentSkeleton/>
        )
    }

    if (isSuccess) {
        const { name, time, temp, icon } = transformCurrent(currentWeather);
        const path = icon ? icon : "00";
        return (
            <div className={`weather__current ${size}`}>
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