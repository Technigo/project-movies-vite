import './css/carousel.css'
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

export const Carousel = ({movies}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
   
    const autoScroll = true;
    let intervalTime = 10000

    const nextSlide = () => {
        setCurrentSlide(currentSlide  === movies.length - 1 ? 0 : currentSlide + 1)
    }

    function auto() {
        setInterval(nextSlide,intervalTime)
    }

    useEffect(() => {
       if (autoScroll) {
        auto()
       }
    }, [currentSlide])
   

    return(
        <div className="carousel">
            {movies.map((movie , index) => {
                return (
                <div className={currentSlide === index ? "slide current" : "slide"} key={index}>
                {index === currentSlide && (
                <>
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt={movie.title}/>
                <div className="overlay"></div>
                <div className="content">
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
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
