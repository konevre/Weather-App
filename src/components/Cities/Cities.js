import BaseComponent from "../BaseComponent/BaseComponent";
import CitiesList from "./CitiesList/CitiesList";
import WeatherCurrent from "../Weather/WeatherCurrent/WeatherCurrent";
import WeatherToday from "../Weather/WeatherToday/WeatherToday";
import WeatherForecast from "../Weather/WeatherForecast/WeatherForecast";

import "./cities.scss";

const Cities = () => {
    return (
        <BaseComponent
            page="cities"
            middle={
                <CitiesList/>
            }
            right={
                <div className="cities__weather">
                    <WeatherCurrent size="sm" page="cities" />
                    <WeatherToday number={4} size="sm" page="cities" />
                    <WeatherForecast number={3} size="sm" page="cities" />
                </div>
            }
        />
    )
}

export default Cities;