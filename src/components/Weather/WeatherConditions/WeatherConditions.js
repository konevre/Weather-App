import feel from "../../../resources/conditions/feel.svg";
import drop from "../../../resources/conditions/drop.svg";
import wind from "../../../resources/conditions/wind.svg";
import index from "../../../resources/conditions/index.svg";

import "./weatherConditions.scss";

const WeatherConditions = () => {
    return (
        <div className="weather__conditions">
            <div className="weather__conditions-title">AIR CONDITIONS</div>
            <div className="weather__conditions-wrapper">
                <div className="weather__conditions-item">
                    <img src={feel} alt="real_feel" className="weather__conditions-icon" />
                    <div className="weather__conditions-subtitle">Real Feel</div>
                    <div className="weather__conditions-value">30°</div>
                </div>
                <div className="weather__conditions-item">
                    <img src={wind} alt="real_feel" className="weather__conditions-icon" />
                    <div className="weather__conditions-subtitle">Wind</div>
                    <div className="weather__conditions-value">0.2 km/h</div>
                </div>
                <div className="weather__conditions-item">
                    <img src={drop} alt="real_feel" className="weather__conditions-icon" />
                    <div className="weather__conditions-subtitle">Chance of rain</div>
                    <div className="weather__conditions-value">0%</div>
                </div>
                <div className="weather__conditions-item">
                    <img src={index} alt="real_feel" className="weather__conditions-icon" />
                    <div className="weather__conditions-subtitle">UV Index</div>
                    <div className="weather__conditions-value">3</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherConditions;