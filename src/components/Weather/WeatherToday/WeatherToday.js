import { useSelector } from "react-redux";

import { useGetTodayWeatherQuery } from "../../../api/apiSlice";
import { transformToday } from "../../../utils/utils";

import WeatherTodaySkeleton from "./WeatherTodaySkeleton";

import "./weatherToday.scss";

const WeatherToday = () => {

    const { activeCity } = useSelector(state => state.weather);

    const {
        data: todayWeather,
        isSuccess,
    } = useGetTodayWeatherQuery(activeCity);

    if (isSuccess) {
        const today = transformToday(todayWeather.list, todayWeather.city.timezone);

        const items = today.map((item, i) => {
            const { time, descr, temp, icon } = item;
            return (
                <div key={i} className="weather__today-item">
                    <div className="weather__today-time">{time}</div>
                    <img src={require(`../../../resources/weather-icons/${icon}.svg`)} alt={descr} />
                    <div className="weather__today-temp">{temp}°</div>
                </div>
            )
        })

        return (
            <div className="weather__today">
                <div className="weather__today-title">TODAY'S FORECAST</div>
                <div className="weather__today-forecast">
                    {items}
                </div>
            </div>
        )

    } else {
        return (
            <WeatherTodaySkeleton/>
        )
    }

}

export default WeatherToday;