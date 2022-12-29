import { Link, NavLink } from "react-router-dom";

import preview_logo from "../../resources/logo.svg";
import { ReactComponent as WeatherIcon } from "../../resources/sidebar/weather.svg";
import { ReactComponent as ListIcon } from "../../resources/sidebar/list.svg";
import { ReactComponent as MapIcon } from "../../resources/sidebar/map.svg";
import { ReactComponent as SettingsIcon } from "../../resources/sidebar/settings.svg";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <div className="aside__nav-logo">
                    <Link to="/"><img src={preview_logo} alt="logo" /></Link>
                </div>
                <ul className="aside__nav-list">
                    <li className="aside__nav-item">
                        <NavLink to="/weather" >
                            <WeatherIcon/>
                            Weather
                        </NavLink> 
                    </li>
                    <li className="aside__nav-item">
                        <NavLink to="/cities">
                            <ListIcon/>
                            Cities
                        </NavLink> 
                    </li>
                    <li className="aside__nav-item">
                        <NavLink to="/map">
                            <MapIcon/>
                            Map
                        </NavLink> 
                    </li>
                    <li className="aside__nav-item">
                        <NavLink to="/settings">
                            <SettingsIcon/>
                            Settings
                        </NavLink> 
                    </li>
                    <li className="aside__nav-item"></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;