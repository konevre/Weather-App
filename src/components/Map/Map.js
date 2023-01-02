import BaseComponent from "../BaseComponent/BaseComponent";
import WeatherMap from "./WeatherMap/WeatherMap";
import CitiesList from "../Cities/CitiesList/CitiesList";

import "./style/map.scss";

const Map = () => {
    return (
        <BaseComponent
            page="map"
            middle={
                <WeatherMap/>
            }
            right={
                <div className="map__weather">
                    <CitiesList size="sm" />
                </div>
            }
        />
    )
}

export default Map;