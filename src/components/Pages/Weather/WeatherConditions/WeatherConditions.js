import { useSelector } from "react-redux";

import { transformCurrent } from "../../../../utils/utils";
import { useGetCurrentWeatherQuery } from "../../../../api/apiSlice";

import WeatherConditionsSkeleton from "./WeatherConditionsSkeleton";

import feelIcon from "../../../../resources/conditions/feel.svg";
import dropIcon from "../../../../resources/conditions/drop.svg";
import windIcon from "../../../../resources/conditions/wind.svg";
import indexIcon from "../../../../resources/conditions/index.svg";
import pressureIcon from "../../../../resources/conditions/pressure.svg";
import sunriseIcon from "../../../../resources/conditions/sunrise.svg";
import sunsetIcon from "../../../../resources/conditions/sunset.svg";
import cloudsIcon from "../../../../resources/conditions/clouds.svg";

import "./style/weatherConditions.scss";

const WeatherConditions = () => {

    const { activeCity } = useSelector(state => state.weather);
    const settings = useSelector(state => state.settings);

    const {
        data: currentWeather,
        isSuccess,
        isFetching,
        isLoading,
        isError
    } = useGetCurrentWeatherQuery(activeCity);

    if (isError || isFetching || isLoading) {
        return (
            <WeatherConditionsSkeleton/>
        )
    }

    if (isSuccess) {
        const { 
            feel, 
            wind, 
            humidity, 
            visibility, 
            pressure,
            sunrise,
            sunset,
            cloudiness
        } = transformCurrent(currentWeather, settings);

        const generalObj = [
            { subtitle: "Real Feel", value: feel, img: feelIcon},
            { subtitle: "Wind", value: wind, img: windIcon},
            { subtitle: "Humidity", value: humidity, img: dropIcon},
            { subtitle: "Sunrise", value: sunrise, img: sunriseIcon},
            { subtitle: "Visibility", value: visibility, img: indexIcon},
            { subtitle: "Pressure", value: pressure, img: pressureIcon},
            { subtitle: "Cloudiness", value: cloudiness, img: cloudsIcon},
            { subtitle: "Sunset", value: sunset, img: sunsetIcon},
        ]

        const items = generalObj.map(item => {
            const { subtitle, value, img } = item;
            return (
                <div key={subtitle} className="weather__conditions-item">
                    <img 
                        src={img} 
                        alt="real_feel"
                        className="weather__conditions-icon" />
                    <div className="weather__conditions-subtitle">{subtitle}</div>
                    <div className="weather__conditions-value">{value}</div>
                </div>
            )
        })

        return (
            <div className="weather__conditions">
                <div className="weather__conditions-title">GENERAL</div>
                <div className="weather__conditions-wrapper">
                    {items}
                </div>
            </div>
        )
    }
}

export default WeatherConditions;