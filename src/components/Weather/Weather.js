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
                     <WeatherCurrent size="lg" page="weather" />
                     <WeatherToday size="lg" number={6} />
                     <WeatherConditions/>
                 </div>
            }
            right={
                <WeatherForecast size="lg" number={5} />
            }
        />
    )
}

export default Weather;