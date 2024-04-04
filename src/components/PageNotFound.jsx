import { Link } from "react-router-dom"
import { IoIosArrowDropleftCircle } from "react-icons/io"

export const PageNotFound = () => {
  return (
    <div>
      <h1>Ooops, it seems like you are lost!</h1>
      <Link to={"/"}>
        <div className="back-arrow">
          <IoIosArrowDropleftCircle className="back-icon" />
          <p className="back-text">Navigate back to all movies</p>
        </div>
      </Link>
    </div>
  )
}
