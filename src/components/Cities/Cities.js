import Search from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import WeatherCurrent from "../Weather/WeatherCurrent/WeatherCurrent";
import WeatherToday from "../Weather/WeatherToday/WeatherToday";

import icon from "../../resources/weather-icons/01d.svg";
import close from "../../resources/close.svg";
import "./cities.scss";

const Cities = () => {
    return (
        <div className="cities-grid">
            <Sidebar />
            <div>
                <Search />
                <div className="cities__wrapper">
                    <div className="cities__item">
                        <img src={icon} alt="weather__img" className="cities__item-img"/>
                        <div className="cities__item-descr">
                            <div className="cities__item-name">Madrid</div>
                            <div className="cities__item-time">10:43</div>
                        </div>
                        <div className="cities__item-temp">23°</div>
                        <img src={close} alt="close" className="cities__item-delete" />
                    </div>
                    <div className="cities__item">
                        <img src={icon} alt="weather__img" className="cities__item-img"/>
                        <div className="cities__item-descr">
                            <div className="cities__item-name">Madrid</div>
                            <div className="cities__item-time">10:43</div>
                        </div>
                        <div className="cities__item-temp">23°</div>
                        <img src={close} alt="close" className="cities__item-delete" />
                    </div>
                </div>
            </div>
            <div className="cities__weather">
                {/* <WeatherCurrent/>
                <WeatherToday/> */}
            </div>
        </div>
    )
}

export default Cities;