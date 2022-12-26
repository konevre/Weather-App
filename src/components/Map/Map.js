import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import WeatherMap from "./WeatherMap/WeatherMap";

const Map = () => {
    return (
        <div className="cities-grid">
            <Sidebar />
            <div>
                <Search page="cities"/>
                <WeatherMap/>
            </div>
            <div className="cities__weather">
                
            </div>
        </div>
    )
}

export default Map;