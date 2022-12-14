import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Preview from "../Preview/Preview";


const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Preview/>}/>
			</Routes>
		</Router>
	)
}

export default App;