import { Link } from "react-router-dom"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import "./PageNotFound.css"

export const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-message">
        <h1>404: Cut! We Lost the Script!</h1>
        <p className="error-paragraph">
          Oops! Looks like our website went off-script and landed in the land of
          lost links. We&apos;re scrambling to find the director&apos;s cut.
          Hang tight! 🎬🔍
        </p>
        <Link to={"/"}>
          <div className="back-home">
            <IoIosArrowDropleftCircle className="back-icon" />
            <p className="back-text">Take me back to all movies</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
