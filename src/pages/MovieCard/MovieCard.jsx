import styles from './MovieCard.module.css';

export const MovieCard = ({ movie }) => {

    const voteAverage = movie.vote_average;
    const overView = movie.overview;

    return (
        <div className={styles.card}>
            <p className={styles.testing}>Hola! 💃🏽 Testing in the MovieCard/MovieCard.jsx! </p>

            <p className={styles.vote}>⭐ {voteAverage}</p>
            {/*just pasted in a star, but its not as pretty as the one technigo uses*/}
            {/*use tooltip to display number with only one decimal? 7.8 instead of 7.89? I think tooltip makes it possible to see the whole number too for the user.*/}
            <p>Title: {movie.title}</p>
            <p className={styles.overView}>{overView}</p>
        </div>

    );
}

