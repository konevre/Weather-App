import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Preview from "../Preview/Preview";
import Weather from '../Weather/Weather';
import Cities from '../Cities/Cities';
import Map from '../Map/Map';


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Preview/>}/>
				<Route path="/weather" element={<Weather/>}/>
				<Route path="/cities" element={<Cities/>}/>
				<Route path="/map" element={<Map/>}/>
			</Routes>
		</Router>
	)
}

export default App;