import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Preview from "../Preview/Preview";
import Weather from '../Weather/Weather';
import Cities from '../Cities/Cities';


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Preview/>}/>
				<Route path="/weather" element={<Weather/>}/>
				<Route path="/cities" element={<Cities/>}/>
			</Routes>
		</Router>
	)
}

export default App;