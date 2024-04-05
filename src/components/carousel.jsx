import './css/carousel.css'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { movieBanners } from '../movieBanners.json'
import { Link } from 'react-router-dom'

export const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
   
    const autoScroll = true;
    let intervalTime = 6000
    let slideInterval

    const nextSlide = () => {
        setCurrentSlide(currentSlide  === movieBanners.length - 1 ? 0 : currentSlide + 1)
    }

    function auto() {
        slideInterval= setInterval(nextSlide,intervalTime)
    }

    useEffect(() => {
       if (autoScroll) {
        auto()
       }
       return() => clearInterval(slideInterval)
    }, [currentSlide])
   

    return(
        <div className="carousel">
          {movieBanners.map((movie , index) => {
                return (
                <div className={currentSlide === index ? "slide current" : "slide"} key={index}>
                {index === currentSlide && (
                <>
                <Link to={`movie/${movie.id}`}>
                <img src={movie.image}
                alt="movie"/>
                <div className="overlay-slide">
                <div className="content">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <div className="genres">
                    {movie.genres.map((genre, index) => (
                  <h3 key={index}>{genre.name}</h3>
                ))}
                </div>
                </div>
                </div>
                </Link>
                </>
                )}
            </div>
            )
         })} 
        </div>
    )
}

Carousel.propTypes= {
    movies: PropTypes.array.isRequired
}


