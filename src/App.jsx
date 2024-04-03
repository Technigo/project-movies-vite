import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Movies } from './components/FirstPage'
import { Details } from './components/SecondPage'


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
