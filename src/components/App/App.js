import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Preview from "../Preview/Preview";
import Weather from '../Weather/Weather';


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Preview/>}/>
				<Route path="/weather" element={<Weather/>}/>
			</Routes>
		</Router>
	)
}

export default App;