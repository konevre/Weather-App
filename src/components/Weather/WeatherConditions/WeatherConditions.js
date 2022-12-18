import { useSelector } from "react-redux";

import { transformCurrent } from "../../../utils/utils";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import WeatherConditionsSkeleton from "./WeatherConditionsSkeleton";

import feelIcon from "../../../resources/conditions/feel.svg";
import dropIcon from "../../../resources/conditions/drop.svg";
import windIcon from "../../../resources/conditions/wind.svg";
import indexIcon from "../../../resources/conditions/index.svg";

import "./weatherConditions.scss";

const WeatherConditions = () => {

    const { activeCity } = useSelector(state => state.weather);

    const {
        data: currentWeather,
        isSuccess,
        isFetching,
        isLoading,
        isError
    } = useGetCurrentWeatherQuery(activeCity);

    if (isError || isFetching || isLoading) {
        return (
            <WeatherConditionsSkeleton/>
        )
    }

    if (isSuccess) {
        const { feel, wind, humidity, visibility } = transformCurrent(currentWeather);
        return (
            <div className="weather__conditions">
                <div className="weather__conditions-title">AIR CONDITIONS</div>
                <div className="weather__conditions-wrapper">
                    <div className="weather__conditions-item">
                        <img src={feelIcon} alt="real_feel" className="weather__conditions-icon" />
                        <div className="weather__conditions-subtitle">Real Feel</div>
                        <div className="weather__conditions-value">{feel}°</div>
                    </div>
                    <div className="weather__conditions-item">
                        <img src={windIcon} alt="real_feel" className="weather__conditions-icon" />
                        <div className="weather__conditions-subtitle">Wind</div>
                        <div className="weather__conditions-value">{wind} m/s</div>
                    </div>
                    <div className="weather__conditions-item">
                        <img src={dropIcon} alt="real_feel" className="weather__conditions-icon" />
                        <div className="weather__conditions-subtitle">Humidity</div>
                        <div className="weather__conditions-value">{humidity}%</div>
                    </div>
                    <div className="weather__conditions-item">
                        <img src={indexIcon} alt="real_feel" className="weather__conditions-icon" />
                        <div className="weather__conditions-subtitle">Visibility</div>
                        <div className="weather__conditions-value">{visibility} km</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherConditions;