import "./weatherForecast.scss";

const WeatherForecast = ({weatherForecast}) => {
    
    const items = weatherForecast.map((item, i) => {
        const { temp, icon, descr, date } = item;
        return (
            <div className="weather__forecast-item" key={i}>
                <div className="weather__forecast-day">{date}</div>
                <img src={require(`../../../resources/weather-icons/${icon}d.svg`)} alt="weather__icon" />
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