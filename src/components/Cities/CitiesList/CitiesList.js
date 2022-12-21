import { useSelector } from "react-redux";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import { transformCurrent } from "../../../utils/utils";

// import icon from "../../../resources/weather-icons/01d.svg";
import close from "../../../resources/close.svg";

import "./citiesList.scss";

const CitiesList = () => {

    const { cities } = useSelector(state => state.cities);

    if (cities.length > 0) {
        const items = cities.map((item, i) => {
            const {
                data: currentWeather,
                isSuccess
                // eslint-disable-next-line
            } = useGetCurrentWeatherQuery(item)

            if (isSuccess) {
                const { name, temp, time, icon } = transformCurrent(currentWeather);
                return (
                    <div key={i} className="cities__item">
                        <img src={require(`../../../resources/weather-icons/${icon}.svg`)} alt="weather__img" className="cities__item-img" />
                        <div className="cities__item-descr">
                            <div className="cities__item-name">{name}</div>
                            <div className="cities__item-time">{time}</div>
                        </div>
                        <div className="cities__item-temp">{temp}°</div>
                        <img src={close} alt="close" className="cities__item-delete" />
                    </div>
                )
            } else {
                // TODO
                return <h2 key={i}>ERROR / LOADING</h2>;
            }
        })

        return (
            <div className="cities__wrapper">
                {items}
            </div>
        )
    } else {
        return  (
            // TODO
            <h2>NO CITIES ADDED</h2>
        )
        
    }

};

export default CitiesList;