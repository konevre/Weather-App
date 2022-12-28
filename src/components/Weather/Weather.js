import WeatherCurrent from "./WeatherCurrent/WeatherCurrent";
import WeatherToday from "./WeatherToday/WeatherToday";
import WeatherConditions from "./WeatherConditions/WeatherConditions";
import WeatherForecast from "./WeatherForecast/WeatherForecast";
import BaseComponent from "../BaseComponent/BaseComponent";

import "./weather.scss";

const Weather = () => {
    return (
        <BaseComponent
            page="weather"
            middle={
                <div className="weather__wrapper">
                     <WeatherCurrent size="lg" page="weather"/>
                     <WeatherToday number={6} size="lg"/>
                     <WeatherConditions/>
                 </div>
            }
            right={
                <WeatherForecast number={5} size="lg"/>
            }
        />
    )
}

export default Weather;