import React from 'react';
// Routing
//@ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import GenreOV from './components/Genre';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<GenreOV/>}/>
        <Route path='/genre/:genreTerm' element={<Home />}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle />
    </Router>
);

export default App;
