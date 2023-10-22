import { Link } from "react-router-dom"
import "../../index.css"

export const BackButton = () => {
    return (
    <button className=""><Link to={"/"}> Back</Link></button>
    );
};