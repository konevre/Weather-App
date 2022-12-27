import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useSelector } from "react-redux";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import { transformCoords } from '../../../utils/utils';
import MarkerCustom from '../MarkerCustom/MarkerCustom';
import "./weatherMap.scss"

const MapHelper = ({location}) => {
    const map = useMap();
    map.flyTo(location);
    return <></>
}

const WeatherMap = () => {
    const { cities, activeFilter } = useSelector(state => state.cities);

    const {
        data: location,
        isSuccess
    } = useGetCurrentWeatherQuery(activeFilter)

    const markers = cities.map(item => {
        return <MarkerCustom item={item} key={item}/>
    })

    if (isSuccess) {
        const position = transformCoords(location);
        const zoom = 3;

        return (
            <MapContainer 
                center={position} 
                zoom={zoom} 
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"   
                />
                {markers}
            <MapHelper location={position}/>
            </MapContainer>
        )
    } else {
        return null
    }
}

export default WeatherMap;