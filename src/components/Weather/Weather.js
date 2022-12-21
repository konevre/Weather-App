import Sidebar from "../Sidebar/Sidebar";
import Search from "./../Search/Search";
import WeatherCurrent from "./WeatherCurrent/WeatherCurrent";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherConditions from "./WeatherConditions/WeatherConditions";
import WeatherForecast from "./WeatherForecast/WeatherForecast";

import "./weather.scss";

const Weather = () => {
    return (
        <div className="weather-grid" >
            <Sidebar />
            <div>
                <Search/>
                <div className="weather__wrapper">
                    <WeatherCurrent size="lg" page="weather"/>
                    <WeatherToday number={6} size="lg"/>
                    <WeatherConditions/>
                </div>
            </div>
            <WeatherForecast number={5} size="lg"/>
        </div>
    )
}

export default Weather;