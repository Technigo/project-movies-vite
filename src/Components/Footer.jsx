import "./Footer.css"
import image from "../assets/technigo-logo.svg"

export const Footer = () => {
  return (
    <footer className="bottom-footer">
      <p>2024 by Arnau Vidal </p>
      <img src={image} alt="Technigo logo" className="logo" />
    </footer>
  )
}
