import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Feed, Login, Main } from '../../pages'

const App = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/" element={<Main />}>
						<Route path="/feed" element={<Feed />} />
					</Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
