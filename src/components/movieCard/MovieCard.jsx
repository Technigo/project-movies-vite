import { HeadingH2 } from '../typography/headingH2/HeadingH2'
import { Paragraph } from '../typography/paragraph/Paragraph'

import './movieCard.css'

export const MovieCard = () => {
  return (
    <div className="movie-card">
    <a href="">
        <img src="public/little-mermaid.jpeg" alt=""/>
        <div className="details">
            <HeadingH2 text={"Movie heading"}/>
            <Paragraph text={"Release date: 2023-01-01"}/>
        </div>
    </a>
    </div>
  )
}
