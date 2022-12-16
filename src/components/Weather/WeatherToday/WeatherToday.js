
import "./weatherToday.scss";

const WeatherToday = ({weatherToday}) => {
    
    const items = weatherToday.map((item, i) => {
        const { time, descr, temp, icon } = item;
        return (
            <div key={i} className="weather__today-item">
                <div className="weather__today-time">{time}</div>
                <img src={require(`../../../resources/weather-icons/${icon}.svg`)} alt={descr} />
                <div className="weather__today-temp">{temp}°</div>
            </div>
        )
    })

    return (
        <div className="weather__today">
            <div className="weather__today-title">TODAY'S FORECAST</div>
            <div className="weather__today-forecast">
                {items}
            </div>
        </div>
    )
}

export default WeatherToday;