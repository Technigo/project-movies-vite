// Defines all route paths and imports route components
import { Route } from 'react-router-dom';
import {MovieGallery} from './pages/MovieGallery';
import {MovieProfile} from './pages/MovieProfile';

export const routes = (
  <>
    <Route path="/" element={<MovieGallery/>}/>
    <Route path="/movie/:id" element={<MovieProfile/>}/>
  </>
);
