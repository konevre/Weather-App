import { useSelector } from "react-redux";

import { useGetTodayWeatherQuery } from "../../../api/apiSlice";
import { transformToday } from "../../../utils/utils";

import WeatherTodaySkeleton from "./WeatherTodaySkeleton";

import "./weatherToday.scss";

const WeatherToday = ({number, size}) => {

    const { activeCity } = useSelector(state => state.weather);

    const {
        data: todayWeather,
        isSuccess,
        isFetching,
        isLoading,
        isError
    } = useGetTodayWeatherQuery(activeCity);

    if (isError || isFetching || isLoading) {
        return (
            <WeatherTodaySkeleton number={number} size={size}/>
        )
    }

    if (isSuccess) {
        const today = transformToday(todayWeather.list, todayWeather.city.timezone, number);

        const items = today.map((item, i) => {
            const { time, descr, temp, icon } = item;
            return (
                <div key={i} className="weather__today-item">
                    <div className="weather__today-time">{time}</div>
                    <img className={`weather__today-img ${size}`} src={require(`../../../resources/weather-icons/${icon}.svg`)} alt={descr} />
                    <div className="weather__today-temp">{temp}°</div>
                </div>
            )
        })

        return (
            <div className={`weather__today ${size}`}>
                <div className={`weather__today-title ${size}`}>TODAY'S FORECAST</div>
                <div className={`weather__today-forecast ${size}`}>
                    {items}
                </div>
            </div>
        )
    }
}

export default WeatherToday;