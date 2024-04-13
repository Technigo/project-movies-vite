import './Pictures.css'

export const FrontImage = ({movieDetail}) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w342${movieDetail?.poster_path} `}  alt="poster_image" className = "poster-image" />
    </div>
  )
}