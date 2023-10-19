import { IoIosArrowDropleftCircle } from 'react-icons/io'

import './backButton.css'
import { Link } from 'react-router-dom'

export const BackButton = ({ text }) => {
  return (
    // <a className="back-button" href="/">
    //   <IoIosArrowDropleftCircle className="arrow" />
    //   {text}
    // </a>
    <Link to={"/"} className='back-button'>
      <IoIosArrowDropleftCircle className="arrow" />
      {text}
    </Link>
  )
}
