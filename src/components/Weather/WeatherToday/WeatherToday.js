import clearDay from "../../../resources/weather/clear-day.svg";
import cloudy from "../../../resources/weather/cloudy.svg";
import partlyCloudy from "../../../resources/weather/partly-cloudy-day.svg";
import rain from "../../../resources/weather/rain.svg";

import "./weatherToday.scss";

const WeatherToday = () => {
    return (
        <div className="weather__today">
            <div className="weather__today-title">TODAY'S FORECAST</div>
            <div className="weather__today-forecast">
                <div className="weather__today-item">
                    <div className="weather__today-time">6:00</div>
                    <img src={cloudy} alt="weather__today-img" />
                    <div className="weather__today-temp">25°</div>
                </div>
                <div className="weather__today-item">
                    <div className="weather__today-time">9:00</div>
                    <img src={partlyCloudy} alt="weather__today-img" />
                    <div className="weather__today-temp">27°</div>
                </div>
                <div className="weather__today-item">
                    <div className="weather__today-time">12:00</div>
                    <img src={clearDay} alt="weather__today-img" />
                    <div className="weather__today-temp">30°</div>
                </div>
                <div className="weather__today-item">
                    <div className="weather__today-time">15:00</div>
                    <img src={rain} alt="weather__today-img" />
                    <div className="weather__today-temp">26°</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherToday;