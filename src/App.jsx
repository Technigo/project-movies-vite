import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Movies } from "./components/FirstPage.jsx"
import { Details } from "./components/SecondPage.jsx"
import { Nav } from "./components/Nav"
import { useEffect, useState } from "react"
import { NotFound } from "./components/NotFound.jsx"

export const App = () => {
	return (
		<BrowserRouter>
			<main>
				{/* <Nav /> */}
				<Routes>
					<Route path="/" element={<Movies />} />
					<Route path="/details/:slug" element={<Details />} />
					<Route path="/notfound/" element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}
