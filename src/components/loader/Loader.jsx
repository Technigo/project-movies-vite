import { ThreeCircles } from "react-loader-spinner";

import "./loader.css";

// React Loader component
export const Loader = () => {
    return (
        <div className="loader-wrapper">
            <ThreeCircles
                color="#fec700"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};