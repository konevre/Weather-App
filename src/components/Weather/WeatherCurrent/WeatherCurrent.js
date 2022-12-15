import clearDay from "../../../resources/weather/clear-day.svg";

import "./weatherCurrent.scss"

const WeatherCurrent = () => {
    return (
        <div className="weather__current">
            <div className="weather__current-wrapper">
                <div className="weather__current-city">Madrid</div>
                <div className="weather__current-rain">Chance of rain 0%</div>
            </div>
            <div className="weather__current-temp">31°</div>
            <div className="weather__current-img">
                <img src={clearDay} alt="weather_img" />
            </div>
        </div>
    )
}

export default WeatherCurrent;