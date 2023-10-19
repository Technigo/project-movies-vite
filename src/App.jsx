// import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LoadingFullPage } from "./components/LoaingFullPage";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const Detail = lazy(() => import("./pages/Detail"));
import { HomePage } from "./pages/HomePage";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Suspense fallback={<LoadingFullPage />}> */}
       
        {/* </Suspense> */}


        <Route path="/movie/:movieId" element={<Detail />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
