import sunny from "../../../resources/weather/clear-day.svg";
import lightning from "../../../resources/weather/lightning-bolt.svg";
import cloudy from "../../../resources/weather/cloudy.svg";
import partlyCloudy from "../../../resources/weather/partly-cloudy-day.svg";
import rain from "../../../resources/weather/rain.svg";

import "./weatherForecast.scss";

const WeatherForecast = ({weatherForecast}) => {
    
    const items = weatherForecast.map((item, i) => {
        const { temp, descr, date } = item;
        const day = i === 0 ? "Today" : date;
        return (
            <div className="weather__forecast-item" key={i}>
                <div className="weather__forecast-day">{day}</div>
                <img src={sunny} alt="weather__icon" />
                <div className="weather__forecast-descr">{descr}</div>
                <div className="weather__forecast-temp"><span>{temp}</span></div>
            </div>
        )
    })

    return (
        <div className="weather__forecast">
            <div className="weather__forecast-title">5-DAY FORECAST</div>
            <div className="weather__forecast-wrapper">
                {items}
                
            </div>
        </div>
    )
}

export default WeatherForecast;