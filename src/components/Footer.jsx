import "./Footer.css";
import { SiThemoviedatabase } from "react-icons/si";

export const Footer = () => {
  let APITermsOfUse = "This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB."

  return (
    <footer>
      <div className="footer-text-box">
        <SiThemoviedatabase className="MDTB-icon" />

        <div className="footer-text-content">
          <p>{APITermsOfUse}</p>
          <p>&copy; 2024 XingS Movie Collection APP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};