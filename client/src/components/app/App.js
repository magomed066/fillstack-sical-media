import { Header } from '..'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Feed } from '../../pages'

const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />

				<div className="main">
					<Routes>
						<Route path="/feed" element={<Feed />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
