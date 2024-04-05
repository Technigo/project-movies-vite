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
						<button>Placeholder back icon</button>
					</div>
				</Link>
				<div
					className="detail-background"
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
						<div className="poster-text">
							<h1>{detailData.title}</h1>
							<h2>⭐ {detailData.vote_average.toFixed(1)}</h2>
							<p>{detailData.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
