import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <p>Made by</p>
        <ul>
          <li><span>Nathalie</span>
            <a href="https://portfolio-nathalie.netlify.app/">View Nathalies portfolio</a>
          </li>
          <li><span>Sofia</span>
            <a href="https://sofias-portfolio.netlify.app/">View Sofias portfolio</a>
          </li>
        </ul>
      </div>
      <p className="disclaimer">
        Disclaimer: This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
      </p>
    </footer>
  )
}
