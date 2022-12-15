import sunny from "../../../resources/weather/clear-day.svg";
import lightning from "../../../resources/weather/lightning-bolt.svg";
import cloudy from "../../../resources/weather/cloudy.svg";
import partlyCloudy from "../../../resources/weather/partly-cloudy-day.svg";
import rain from "../../../resources/weather/rain.svg";

import "./weatherForecast.scss";

const WeatherForecast = () => {
    return (
        <div className="weather__forecast">
            <div className="weather__forecast-title">5-DAY FORECAST</div>
            <div className="weather__forecast-wrapper">
                <div className="weather__forecast-item">
                    <div className="weather__forecast-day">Today</div>
                    <img src={sunny} alt="weather__icon" />
                    <div className="weather__forecast-descr">Sunny</div>
                    <div className="weather__forecast-temp"><span>37</span>/21</div>
                </div>
                <div className="weather__forecast-item">
                    <div className="weather__forecast-day">Tue</div>
                    <img src={lightning} alt="weather__icon" />
                    <div className="weather__forecast-descr">Lightning</div>
                    <div className="weather__forecast-temp"><span>37</span>/21</div>
                </div>
                <div className="weather__forecast-item">
                    <div className="weather__forecast-day">Wed</div>
                    <img src={cloudy} alt="weather__icon" />
                    <div className="weather__forecast-descr">Cloudy</div>
                    <div className="weather__forecast-temp"><span>37</span>/21</div>
                </div>
                <div className="weather__forecast-item">
                    <div className="weather__forecast-day">Thu</div>
                    <img src={partlyCloudy} alt="weather__icon" />
                    <div className="weather__forecast-descr">Partly cloudy</div>
                    <div className="weather__forecast-temp"><span>37</span>/21</div>
                </div>
                <div className="weather__forecast-item">
                    <div className="weather__forecast-day">Fri</div>
                    <img src={rain} alt="weather__icon" />
                    <div className="weather__forecast-descr">Rain</div>
                    <div className="weather__forecast-temp"><span>37</span>/21</div>
                </div>
                
            </div>
        </div>
    )
}

export default WeatherForecast;