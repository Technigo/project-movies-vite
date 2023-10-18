import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <div>
            <h1>
                Un oh, it seems that the page you are searching for does not exist 🫤.
            </h1>
            <Link to="/">Home Page</Link>
        </div>
    )
}
