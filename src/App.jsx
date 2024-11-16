import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularList from './components/PopularList';
import Detail from './components/Detail';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopularList />} />
        <Route path="/movies/:id" element={<Detail />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};


export default App;

