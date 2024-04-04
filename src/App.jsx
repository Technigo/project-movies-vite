import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Movies } from './components/FirstPage.jsx'
import { Details } from './components/SecondPage.jsx'
import { Nav } from './components/Nav'

export const App = () => {
	return (
		<BrowserRouter>
			<main>
				<Nav />
				<Routes>
					<Route path="/" element={<Movies />} />
					<Route path="/details" element={<Details />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}
