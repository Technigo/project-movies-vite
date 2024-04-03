import { Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";

export const routes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie:id" element={<DetailPage />} />
  </>
);
