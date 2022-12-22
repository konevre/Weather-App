import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"; 

import { transformCurrent } from "../../../utils/utils";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";
import { addCity, citiesSelector } from "../../Cities/CitiesSlice";

import WeatherCurrentSkeleton from "./WeatherCurrentSkeleton";

import "./weatherCurrent.scss"

const WeatherCurrent = ({size, page}) => {

    const { activeCity } = useSelector(state => state.weather);
    const { activeFilter } = useSelector(state => state.cities);
    const cities = useSelector(citiesSelector);
    const dispatch = useDispatch();
    
    const cityQuery = page === "cities" ? activeFilter : activeCity;

    const {
        data: currentWeather,
        isSuccess,
        isError,
        isFetching,
        isLoading,
        error
    } = useGetCurrentWeatherQuery(cityQuery);

    useEffect(() => {
        
        if (isSuccess) {
            dispatch(addCity(transformCurrent(currentWeather)))
        }
        
    }, [cities])

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