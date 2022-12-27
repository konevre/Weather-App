import { useGetCurrentWeatherQuery } from "../../../api/apiSlice";
import { Marker } from 'react-leaflet'

import { transformCoords } from "../../../utils/utils";

const MarkerCustom = ({item}) => {

    const {
        data: location,
        isSuccess
    } = useGetCurrentWeatherQuery(item)

    if (isSuccess) {
        const position = transformCoords(location);
        return (
            <Marker position={position}/>
        )
    } else {
        return null
    }
}

export default MarkerCustom;