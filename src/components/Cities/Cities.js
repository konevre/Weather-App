

import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import WeatherCurrent from "../Weather/WeatherCurrent/WeatherCurrent";
import WeatherToday from "../Weather/WeatherToday/WeatherToday";
import WeatherForecast from "../Weather/WeatherForecast/WeatherForecast";
import CitiesList from "./CitiesList/CitiesList";

import "./cities.scss";

const Cities = () => {

    return (
        <div className="cities-grid">
            <Sidebar />
            <div>
                <Search page="cities"/>
                <CitiesList/>
            </div>
            <div className="cities__weather">
                <WeatherCurrent size="sm" page="cities"/>
                <WeatherToday number={4} size="sm" page="cities"/>
                <WeatherForecast number={3} size="sm" page="cities"/>
            </div>
        </div>
    )
}

export default Cities;