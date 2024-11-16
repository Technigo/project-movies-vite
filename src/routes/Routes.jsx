import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { InfoPage } from "../pages/InfoPage";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Set HomePage as the homepage, to show the list of movies */}
            <Route path="/" element={<HomePage />} />
            {/* Route for movie details, with movieId as a URL parameter */}
            <Route path="/movie/:movieId" element={<InfoPage />} />
            {/* Redirect any unknown paths to the homepage */}
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};