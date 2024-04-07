import './Pictures.css'

export const Background=({movieDetail})=> {
  console.log(movieDetail);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path} `}  alt="background_image" className='background' />
      <div className="inner-shadow"></div>
    </div>
  )
}
