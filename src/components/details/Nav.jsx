import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  return (
    <Link to = "/">
      <h3 className = "back-home"> ◄  Movie </h3>
    </Link>
  )
}