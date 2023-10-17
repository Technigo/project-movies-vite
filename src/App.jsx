import { BackButton } from './components/backButton/BackButton'
import { HeadingH2 } from './components/typography/headingH2/HeadingH2'
import { HeadingH3 } from './components/typography/headingH3/HeadingH3'
import { DetailImage } from './components/detailImage/DetailImage'
import { Paragraph } from './components/typography/paragraph/Paragraph'
import { RatingTag } from './components/ratingTag/ratingTag'
import { MovieCard } from './components/movieCard/MovieCard'

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { routes } from "./routes/routes";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>

        <section>
          <BackButton />
          <HeadingH2 text={"This is heading h2"} />
          <HeadingH3 text={"This is heading h3"} />
          <DetailImage />
          <Paragraph text={"This is an example of a paragraph"} />
          <RatingTag />
          <MovieCard />

        </section>

      </BrowserRouter>
    </>

  )
};
