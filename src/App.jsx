import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Movies } from './components/FirstPage'

export const App = () => {
	return (
		<BrowserRouter>
      <Routes>
			  <Route path="/" element={<Movies />} />
        <Route path="/details" element={<Details />} />
      </Routes>
		</BrowserRouter>
	)
}
