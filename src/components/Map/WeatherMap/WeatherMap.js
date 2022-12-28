import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { useSelector } from "react-redux";
import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";

import { transformCoords } from '../../../utils/utils';
import MarkerCustom from '../MarkerCustom/MarkerCustom';
import "./weatherMap.scss"

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
        return <MapBase position={position} markers={markers}/>

    } else {
        return <MapBase markers={markers}/>
    }
}

const MapHelper = ({location}) => {
    const map = useMap();
    map.flyTo(location);
    return <></>
}

const MapBase = ({position, markers}) => {
    const location = position ? position : [40.4165, -3.7026]
    const helper = position ? <MapHelper location={location}/> : null
    return (
        <MapContainer
            center={location}
            zoom={6}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {helper}
            {markers}
        </MapContainer>
    )
}

export default WeatherMap;