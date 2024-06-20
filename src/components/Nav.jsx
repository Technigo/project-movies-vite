import React from "react"
import { Link, NavLink } from "react-router-dom"
import "../styling/Nav.css"

export const Nav = () => {
	return (
		<>
			<div className="navbar-title">
				<h1>RomComs</h1>
			</div>
			<ul className="navbar">
				<li>
					<NavLink to="/">Movies</NavLink>
				</li>
				<li>
					<NavLink to="/details">Details</NavLink>
				</li>
			</ul>
		</>
	)
}
