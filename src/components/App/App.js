import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Preview from "../Preview/Preview";
import Map from '../Map/Map';
import Weather from '../Weather/Weather';
import Cities from '../Cities/Cities';
import Settings from "../Settings/Settings";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Preview/>}/>
				<Route path="/weather" element={<Weather/>}/>
				<Route path="/cities" element={<Cities/>}/>
				<Route path="/map" element={<Map/>}/>
				<Route path="/settings" element={<Settings/>}/>
			</Routes>
		</Router>
	)
}

export default App;