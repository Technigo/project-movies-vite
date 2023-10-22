import { Link } from "react-router-dom"
import "../../index.css"

export const BackButton = () => {
    return (
    <Link to={"/"} className="back-btn"> Back</Link>
    );
};