// MovieDetails.jsx
import styled from "styled-components"

const DetailsImage = styled.img`

`

export const MovieDetails = () => {
  return (
    <div>
      <DetailsImage
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={`Picture from movie ${title}`}
              />

    </div>
  )
}