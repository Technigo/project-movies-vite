import { BackButton } from '../../components/backButton/BackButton'
import './pageNotFound.css'

export const PageNotFound = () => {
    const nemoImage = '/finding-dory.jpeg'
    const backgroundStyle = {
        backgroundImage: `url(${nemoImage})`
    }
    return (
        <section
            className="page-not-found"
            style={backgroundStyle}>
            <div className="error-content">
                <h1>We could not find the page</h1>
                <h2>Try again</h2>
                <BackButton text={"Back"} />
            </div>
        </section>
    )
}
