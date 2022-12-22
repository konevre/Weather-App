import { useSelector, useDispatch } from "react-redux";
import classNames from 'classnames';

import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";
import { filterActive, deleteCity } from "../CitiesSlice";
import CitiesItemSkeleton from "./CitiesItemSkeleton";

import { transformCurrent } from "../../../utils/utils";

import close from "../../../resources/close.svg";
import "./citiesItem.scss";

const CitiesItem = ({item}) => {
    const dispatch = useDispatch();
    const { activeFilter } = useSelector(state => state.cities);

    const {
        data: currentWeather,
        isSuccess
    } = useGetCurrentWeatherQuery(item)

    const onDelete = (e, name) => {
        e.stopPropagation();
        dispatch(deleteCity(name));
        dispatch(filterActive(null));
    }

    if (isSuccess) {
        const { name, temp, time, icon } = transformCurrent(currentWeather);
        const itemClass = classNames('cities__item', {
            'active': name === activeFilter
        });
        return (
            <div className={itemClass} onClick={() => dispatch(filterActive(name))}>
                <img src={require(`../../../resources/weather-icons/${icon}.svg`)} alt="weather__img" className="cities__item-img" />
                <div className="cities__item-descr">
                    <div className="cities__item-name">{name}</div>
                    <div className="cities__item-time">{time}</div>
                </div>
                <div className="cities__item-temp">{temp}°</div>
                <img 
                    src={close} 
                    alt="close" 
                    className="cities__item-delete" 
                    onClick={(e) => onDelete(e, name)}/>
            </div>
        )
    } else {
        // TODO
        return <CitiesItemSkeleton />
    }
}

export default CitiesItem;