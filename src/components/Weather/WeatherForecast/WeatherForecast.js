import { useSelector } from "react-redux";

import { transformForecast } from "../../../utils/utils";
import { useGetForecastWeatherQuery } from "../../../api/apiSlice";

import WeatherForecastSkeleton from "./WeatherForecastSkeleton";

import "./weatherForecast.scss";

const WeatherForecast = ({size, number}) => {

    const { activeCity } = useSelector(state => state.weather);

    const {
        data: forecastWeather,
        isSuccess,
        isFetching,
        isLoading,
        isError
    } = useGetForecastWeatherQuery(activeCity);

    if (isError || isFetching || isLoading) {
        return (
            <WeatherForecastSkeleton number={number} size={size}/>
        )
    }

    if (isSuccess) {
        const forecast = transformForecast(forecastWeather, number);

        const items = forecast.map((item, i) => {
            const { temp, icon, descr, date } = item;
            return (
                <div className={`weather__forecast-item ${size}`} key={i}>
                    <div className="weather__forecast-day">{date}</div>
                    <img className={`weather__forecast-img ${size}`} src={require(`../../../resources/weather-icons/${icon}d.svg`)} alt="weather__icon" />
                    <div className="weather__forecast-descr">{descr}</div>
                    <div className="weather__forecast-temp"><span>{temp}</span></div>
                </div>
            )
        })

        return (
            <div className={`weather__forecast ${size}`}>
                <div className={`weather__forecast-title ${size}`}>5-DAY FORECAST</div>
                <div className="weather__forecast-wrapper">
                    {items}
                </div>
            </div>
        )
        
    }
}

export default WeatherForecast;