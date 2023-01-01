import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';

import Preview from "../../Preview/Preview";
import Map from '../../Map/Map';
import Weather from '../../Weather/Weather';
import Cities from '../../Cities/Cities';
import Settings from "../../Settings/Settings";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
				<Route path="/" element={<Preview/>}/>
				<Route path="/weather" element={<Weather/>}/>
				<Route path="/cities" element={<Cities/>}/>
				<Route path="/map" element={<Map/>}/>
				<Route path="/settings" element={<Settings/>}/>
			</Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;