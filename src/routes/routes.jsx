import { Route } from "react-router-dom";
import { PopularList } from "../pages/popularList/PopularList.jsx";
import { Details } from "../pages/details/Details.jsx";

export const routes = () => {
    return (
        <>
            <Route path='/' element={<PopularList />} />
            <Route path="/details" element={<Details />} />
        </>
    )
}
