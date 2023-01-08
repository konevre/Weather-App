import { useSelector } from "react-redux";

import { transformForecast } from "../../../../utils/utils";
import { useGetForecastWeatherQuery } from "../../../../api/apiSlice";

import WeatherForecastSkeleton from "./WeatherForecastSkeleton";

import "./style/weatherForecast.scss";

const WeatherForecast = ({size, number, page}) => {

    const { activeCity } = useSelector(state => state.weather);
    const { activeFilter } = useSelector(state => state.cities);
    const settings = useSelector(state => state.settings);
    
    const cityQuery = page === "cities" ? activeFilter : activeCity;

    const {
        data: forecastWeather,
        isSuccess,
        isFetching,
        isLoading,
        isError
    } = useGetForecastWeatherQuery(cityQuery);

    if (isError || isFetching || isLoading) {
        return (
            <WeatherForecastSkeleton number={number} size={size}/>
        )
    }

    if (isSuccess) {
        const forecast = transformForecast(forecastWeather, settings, number);

        const items = forecast.map((item, i) => {
            const { temp, tempNight, icon, descr, date } = item;
            return (
                <div className={`weather__forecast-item ${size}`} key={i}>
                    <div className={`weather__forecast-day ${size}`}>{date}</div>
                    <img 
                        className={`weather__forecast-img ${size}`} 
                        src={require(`../../../../resources/weather-icons/${icon}d.svg`)} 
                        alt="weather__icon" 
                    />
                    <div className={`weather__forecast-descr ${size}`}>{descr}</div>
                    <div className={`weather__forecast-temp ${size}`}><span>{temp}</span>/{tempNight}</div>
                </div>
            )
        })

        return (
            <div className={`weather__forecast ${size}`}>
                <div className={`weather__forecast-title ${size}`}>{number}-DAY FORECAST</div>
                <div className="weather__forecast-wrapper">
                    {items}
                </div>
            </div>
        )
        
    }
}

export default WeatherForecast;