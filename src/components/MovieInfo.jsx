export const MovieInfo = ({ id, poster, title, vote, description }) => {
  // This component generates a section for displaying details of a movie. It includes an image, the movie's title, a user rating, and a description.
    return (
        <div className="moviedetails-wrapper" key={id}>
            <img
                src={`https://image.tmdb.org/t/p/w342/${poster}`}
                alt={title}
            />
            <div className="moviedetails-infocontent">
                <div className="title-vote-wrapper">
                    <p className="vote">⭐️ {vote}</p>
                    <h2>{title}</h2>
                </div>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};
