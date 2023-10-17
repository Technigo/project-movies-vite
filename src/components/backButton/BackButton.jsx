import {IoIosArrowDropleftCircle} from 'react-icons/io'

import './backButton.css'

export const BackButton = () => {
  return (
    <a className="back-button" href="/">
        <IoIosArrowDropleftCircle className="arrow"/>
        Movies
    </a>
  )
}
