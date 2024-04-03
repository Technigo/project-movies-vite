const MovieDetail = ({ bgImage, poster, rate, descr, name }) => {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="details">
        <img src={poster} alt={name} />
        <div className="texts">
          <h1>
            <span>{name}</span>
            <span>{rate}</span>
          </h1>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
