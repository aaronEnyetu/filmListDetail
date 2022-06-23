import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FilmPage from './FilmPage';
import FilmDetail from './FilmDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            {/* this home page route should list all the movies */}
            <FilmPage />
          </Route>
          <Route exact path='/films/:id'> 
            {/* this route should point to a particular movie by id and render that specific FilmDetail page */}
            <FilmDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}