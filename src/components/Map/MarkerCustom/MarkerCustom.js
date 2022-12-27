import { Link } from "react-router-dom";
import { Marker, Popup } from 'react-leaflet'
import { useDispatch } from "react-redux";

import { makeActive } from "../../Weather/weatherSlice";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";
import { transformCurrent } from "../../../utils/utils";

import "./markerCustom.scss"

const MarkerCustom = ({item}) => {
    const dispatch = useDispatch();
    const {
        data: location,
        isSuccess
    } = useGetCurrentWeatherQuery(item)

    if (isSuccess) {
        const { coords, name, temp, icon } = transformCurrent(location);
        return (
            <Marker position={coords}>
                <Popup>
                    <div className="popup__name">{name}</div>
                    <img src={require(`../../../resources/weather-icons/${icon}.svg`)} alt="weather_img" />
                    <div className="popup__temp">{temp}°</div>
                    <Link 
                        to="/weather" 
                        onClick={() => {
                            dispatch(makeActive(name))
                            console.log(name)
                        }}>
                        <div className="popup__button" >See detail</div>
                    </Link> 
                </Popup>
            </Marker>
        )
    } else {
        return null
    }
}

export default MarkerCustom;