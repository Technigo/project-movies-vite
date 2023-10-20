import { Route, Routes } from "react-router-dom"
import { MainPage } from "./popularList"


export const MyRoutes = () => {
return (
    <Routes>
        <Route path="/" element={<MainPage />}/>
    </Routes>
)

}

/* another route file? */


