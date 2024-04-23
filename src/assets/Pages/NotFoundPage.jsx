import { Link } from "react-router-dom";

const notFoundPageStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "black",
    color: "white",
};

const linkStyles = {
    color: "white",
    marginTop: "20px"
};

export const NotFoundPage = () => {
    return (
        <div style={notFoundPageStyles}>
            <h1>Oh oh, you are leaving The Movie Zone! Hold on for a second.</h1>
            <Link to="/" style={linkStyles}>Go back to the zone</Link>
        </div>
    );
};