import { Link } from 'react-router-dom'
import '../styling/DetailList.css'

export const DetailList = ({ detailData }) => {
	console.log('check data in DetailList', detailData)
	return (
		<>
			{/* {detailData &&
				detailData.results.map((detail) => ( */}
			<div className="detail-wrapper">
				<Link to={'/'}>
					<div className="back-btn">
						<div>Placeholder for back icon</div>
					</div>
				</Link>
				<div
					className="movie-background"
					style={{
						backgroundImage: `url(https://media.themoviedb.org/t/p/w780${detailData.backdrop_path})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						minWidth: '100VW',
					}}>
					<div className="details-card">
						<img
							className="poster-image"
							src={`https://image.tmdb.org/t/p/w342${detailData.poster_path}`}
							alt={`Movie poster for ${detailData.title}`}
						/>
					</div>
					<div className="poster-text">
						<span>{detailData.title}</span>
						<span>⭐ {detailData.vote_average.toFixed(1)}</span>
						<span>{detailData.overview}</span>
					</div>
				</div>
			</div>
		</>
	)
}
