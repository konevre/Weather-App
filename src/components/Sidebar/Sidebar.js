import { Link } from "react-router-dom";

import preview_logo from "../../resources/logo.svg";
import weather_icon from "../../resources/sidebar/weather.svg";
import list_icon from "../../resources/sidebar/list.svg";
import map_icon from "../../resources/sidebar/map.svg";
import settings_icon from "../../resources/sidebar/settings.svg";
import "./sidebar.scss";

const Sidebar = () => {

    return (
        <div className="weather-grid">
            <aside className="aside">
                <nav className="aside__nav">
                    <div className="aside__nav-logo">
                        <Link to="/"><img src={preview_logo} alt="logo" /></Link>
                    </div>
                    <ul className="aside__nav-list">
                        <li className="aside__nav-item">
                            <Link to="/weather"><img src={weather_icon} alt="weather" className="aside__nav-icon" />Weather</Link> 
                        </li>
                        <li className="aside__nav-item">
                            <Link to="/cities"><img src={list_icon} alt="cities" className="aside__nav-icon" />Cities</Link> 
                        </li>
                        <li className="aside__nav-item">
                            <Link to="/map"><img src={map_icon} alt="map" className="aside__nav-icon" />Map</Link> 
                        </li>
                        <li className="aside__nav-item">
                            <Link to="/settings"><img src={settings_icon} alt="settings" className="aside__nav-icon" />Settings</Link> 
                        </li>
                        <li className="aside__nav-item"></li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar;