import clearDay from "../../../resources/weather/clear-day.svg";

import "./weatherCurrent.scss"

const WeatherCurrent = ({weatherCurrent}) => {
    const { name, temp, humidity } = weatherCurrent;

    return (
        <div className="weather__current">
            <div className="weather__current-wrapper">
                <div className="weather__current-city">{name}</div>
                <div className="weather__current-rain">Humidity: {humidity}%</div>
            </div>
            <div className="weather__current-temp">{temp}°</div>
            <div className="weather__current-img">
                <img src={clearDay} alt="weather_img" />
            </div>
        </div>
    )
}

export default WeatherCurrent;