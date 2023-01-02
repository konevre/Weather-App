import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';

import Preview from "../../Pages/Preview/Preview";
import Map from '../../Pages/Map/Map';
import Weather from '../../Pages/Weather/Weather';
import Cities from '../../Pages/Cities/Cities';
import Settings from "../../Pages/Settings/Settings";
import Page404 from "../../Pages/Page404/Page404";
import SimpleBackdrop from "../../Backdrop/Backdrop";
import { Suspense } from "react";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
			<Suspense fallback={<SimpleBackdrop/>}>
				<Routes location={location} key={location.pathname}>
					<Route path="/Weather-App" element={<Preview/>}/>
					<Route path="/weather" element={<Weather/>}/>
					<Route path="/cities" element={<Cities/>}/>
					<Route path="/map" element={<Map/>}/>
					<Route path="/settings" element={<Settings/>}/>
					<Route path="*" element={<Page404/>}/>
				</Routes>
			</Suspense>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;