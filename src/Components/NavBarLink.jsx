import { Link } from "react-router-dom"

export const NavBarLink = () => {
  const links = [
    {to:"/", text:"Home page"},
    {to:"/about", text:"About"},
    {to:"/my-info", text:"My info"},
    {to:"/film-page", text:"Films"},
    {to:"/loggin-page", text:"Loggin"},
    {to:"/favourite-movies-page", text:"Fav movies"}
  ]
  return (
    <div className="card-menu">
      <nav>
        <ul className="app-ul">
          {links.map(({to, text}) => (
            <li className="app-li" key={to}>
              <Link to={to}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

