import { useSelector, useDispatch } from "react-redux";
import classNames from 'classnames';
import { Reorder } from "framer-motion"
import { useState } from "react";

import WeatherError from "../../Weather/WeatherCurrent/WeatherError";
import { useGetCurrentWeatherQuery } from "../../../../api/apiSlice";
import { filterActive, deleteCity } from "../CitiesSlice";
import CitiesItemSkeleton from "./CitiesItemSkeleton";

import { transformCurrent } from "../../../../utils/utils";

import { ReactComponent as Close } from "../../../../resources/close.svg";
import "./style/citiesItem.scss";

const CitiesItem = ({item, size}) => {
    const dispatch = useDispatch();
    const { activeFilter } = useSelector(state => state.cities);
    const settings = useSelector(state => state.settings);
    const [ isDragging, setDragging ] = useState(false);

    const {
        data: currentWeather,
        isSuccess,
        isLoading,
        isError,
        error
    } = useGetCurrentWeatherQuery(item)

    const onDelete = (e, name) => {
        e.stopPropagation();
        dispatch(deleteCity(name));
        if (activeFilter === name) {
            dispatch(filterActive(null));
        }
    }

    if (isError) {
        setTimeout(() => {
            dispatch(deleteCity(item));
        }, 5000) 
        return <WeatherError error={error}/> 
    }

    if (isLoading) {
        return <CitiesItemSkeleton/>
    }

    if (isSuccess) {
        const { name, temp, time, icon } = transformCurrent(currentWeather, settings);
        const itemClass = classNames('cities__item', {
            'active': name === activeFilter,
            'sm': size === "sm",
        });

        return (
            <Reorder.Item
                as="div"
                value={item}
                className={itemClass}
                onClick={() => {
                    if (!isDragging) {
                        dispatch(filterActive(name))
                    }
                }}
                whileDrag={{scale: 0.95}}
                onDragStart={() => setDragging(true)}
                onDragEnd={() => setTimeout(() => setDragging(false), 400)}
            >
                    <img src={require(`../../../../resources/weather-icons/${icon}.svg`)} alt="weather__img" className="cities__item-img" />
                    <div className="cities__item-descr">
                        <div className={`cities__item-name ${size}`}>{name}</div>
                        <div className="cities__item-time">{time}</div>
                    </div>
                    <div className={`cities__item-temp ${size}`}>{temp}</div>
                    <Close className="cities__item-delete" onClick={(e) => onDelete(e, name)}/>
            </Reorder.Item>
        )
    } 
}

export default CitiesItem;