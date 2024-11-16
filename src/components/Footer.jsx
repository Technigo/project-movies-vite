import { SiThemoviedatabase } from "react-icons/si";

export const Footer = () => {
  let APITermsOfUse = "This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB."

  return (
    <div>
      <SiThemoviedatabase className="MDTB-icon"/>
      <p>{APITermsOfUse}</p>
    </div>
  );
};