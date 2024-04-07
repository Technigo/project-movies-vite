import './Description.css'

export const Descriptions=({movieDetail})=> {
  return (
    <div className='descriptionContainer'>
      <h1 className='titleContainer'>
        <span className='detailTitle'>{movieDetail?.title}</span>
        <span className='rate'>⭐{movieDetail?.vote_average.toFixed(1)}</span>
      </h1>
      <p className='detailOverview'>{movieDetail?.overview}</p>
    </div>
  )
}
