import './Description.css'

export const Description = ({movieDetail}) => {
  return (
    <div className = "description-container">
      <h1 className = "title-container">
        <span className = "detail-title">{movieDetail?.title}</span>
        <span className = "rate">⭐{movieDetail?.vote_average.toFixed(1)}</span>
      </h1>
      <p className = "detail-overview">{movieDetail?.overview}</p>
    </div>
  )
}