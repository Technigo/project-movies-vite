import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Background } from '../components/details/Background';
import { FrontImage } from '../components/details/FrontImage';
import { Descriptions } from '../components/details/Descriptions';
import { Nav } from '../components/details/Nav';
import './ShowMovie.css'

const apiEnv = import.meta.env.VITE_OPENDB_KEY;

export const ShowMovie=()=> {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiEnv}&language=en-US`;

  useEffect(() => {
    fetch(movieDetailUrl)
      .then(res => res.json())
      .then(json => {
        setMovieDetail(json);        
      })
      .catch(error => {
        console.error(`Error fetching movie detail for id: ${params.id}`, error);
      });
  }, [movieDetailUrl, params.id]);

  return (
    <div className='detailPageContainer'>
      <Background movieDetail={movieDetail} />
      <Nav />
      <div className='summary'>
        <FrontImage movieDetail={movieDetail} />
        <Descriptions movieDetail={movieDetail} />
      </div>
    </div>
  )
}
