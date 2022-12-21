

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
                <Search />
                <CitiesList/>
            </div>
            <div className="cities__weather">
                <WeatherCurrent size="sm"/>
                <WeatherToday number={4} size="sm"/>
                <WeatherForecast number={3} size="sm"/>
            </div>
        </div>
    )
}

export default Cities;