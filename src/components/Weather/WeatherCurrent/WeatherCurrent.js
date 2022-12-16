
import "./weatherCurrent.scss"

const WeatherCurrent = ({weatherCurrent}) => {
    const { name, temp, time, icon } = weatherCurrent;
    const path = icon ? icon : "00";
    
    return (
        <div className="weather__current">
            <div className="weather__current-wrapper">
                <div className="weather__current-city">{name}</div>
                <div className="weather__current-rain">Time: {time}</div>
            </div>
            <div className="weather__current-temp">{temp}°</div>
            <div className="weather__current-img">
                <img src={require(`../../../resources/weather-icons/${path}.svg`)} alt="weather_img" />
            </div>
        </div>
    )
}

export default WeatherCurrent;