import { stack as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import '../stylesheets/sidebar.css'

export const Sidebar = () => {
  return (
    <Menu>
      <NavLink to={'/'}>Movies</NavLink>
      <NavLink to={'/movie/top-rated'}>Top Rated</NavLink>
      <NavLink to={'/tv/popular'}>TV Series</NavLink>
    </Menu>
  )
}
