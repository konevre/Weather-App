import { useSelector } from "react-redux";

import { useGetTodayWeatherQuery } from "../../../../api/apiSlice";
import { transformToday } from "../../../../utils/utils";

import WeatherTodaySkeleton from "./WeatherTodaySkeleton";

import "./style/weatherToday.scss";

const WeatherToday = ({number, size, page}) => {

    const { activeCity } = useSelector(state => state.weather);
    const { activeFilter } = useSelector(state => state.cities);
    const settings = useSelector(state => state.settings);
    
    const cityQuery = page === "cities" ? activeFilter : activeCity;

    const {
        data: todayWeather,
        isSuccess,
        isFetching,
        isLoading,
        isError
    } = useGetTodayWeatherQuery(cityQuery);

    if (isError || isFetching || isLoading) {
        return (
            <WeatherTodaySkeleton number={number} size={size}/>
        )
    }

    if (isSuccess) {
        const today = transformToday(todayWeather.list, todayWeather.city.timezone, number, settings);

        const items = today.map((item, i) => {
            const { time, descr, temp, icon } = item;
            return (
                <div key={i} className={`weather__today-item ${size}`}>
                    <div className={`weather__today-time ${size}`}>{time}</div>
                    <img 
                        className={`weather__today-img ${size}`} 
                        src={require(`../../../../resources/weather-icons/${icon}.svg`)} 
                        alt={descr} 
                    />
                    <div className={`weather__today-temp ${size}`}>{temp}</div>
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