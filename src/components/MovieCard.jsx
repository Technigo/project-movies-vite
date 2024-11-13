import { Link } from "react-router-dom"
import styled from "styled-components"
import "./MovieCard.css"

const MovieCardStyle = styled.article`
    background-color: grey;
    min-width: 200px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img{
      width: 100%;
      transition: transform 0.3s ease;
    }

    &:hover img{
      transform: scale()(1.1)
    }
`
const InfoOverlay = styled.div`
position: absolute;
color: white;
padding: 10px;
`

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movie/${id}`}>
      <MovieCardStyle>
        <InfoOverlay>
          <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}
          />
          <p>Released {release_date}</p>
          <h2>{title}</h2>
        </InfoOverlay>
      </MovieCardStyle>
    </Link>
  )
}