import { useParams } from 'react-router-dom'
import './ShowMovie.css'
import { Background } from '../components/details/Background';
import { Descriptions } from '../components/details/Descriptions';
import { useEffect, useState } from 'react';
import { FrontImage } from '../components/details/FrontImage';
import { Nav } from '../components/details/Nav';

const api_key = "b8e637d215af7c581df59754b1cd501e";

export const ShowMovie=()=> {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${api_key}&language=en-US`;

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
