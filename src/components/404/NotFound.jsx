import { Link } from "react-router-dom"
import notFoundImg from "/pexels-tima-miroshnichenko-7991428-large.jpg"
import "./NotFound.css"

export const NotFound = () => {
	return (
		<div
			className='not-found-container'
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 20%, rgb(0, 0, 0) 100%), url(${notFoundImg})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<h1>Oups!</h1>
			<p>Nothing to see here</p>
			<div className='link-back'>
				<Link to='/'>Back to the movies</Link>
			</div>
		</div>
	)
}
