import { Link } from 'react-router-dom'

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
				{/* <div
					className="movie-details"
					style={{
						backgroundImage: `url(https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces/${detailData.backdrop_path})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}> */}
					<div className="details-card">
						<div className="details-image">
							<img src="" alt=""></img>
						</div>
						<div>
							<h1>titel</h1>
							<h1>rating</h1>
							<h2>infotext</h2>
						</div>
					</div>
				</div>
			{/* </div> */}
			{/* ))} */}
		</>
	)
}
