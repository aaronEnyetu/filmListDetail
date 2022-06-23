import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { getSingleFilm } from './services/fetch-utils';

export default function FilmDetail() {


  const [film, setFilm] = useState({});
  const match = useParams();
  
  
  useEffect(() =>{
    async function fetch() {
      const movie = await getSingleFilm(match.id);
      setFilm(movie);
    }

    fetch();
        
  }, [match.id]);

  function handleFilmClick() {
    window.open(`${film.link}`);
  }

  return (
    <>
      <Link to="/">Home</Link>
      <div className='film-detail' onClick={handleFilmClick}>
        <div className='film-data'>
          <p>Title:{film.Title}</p>
          <p>Year:{film.Year}</p>
          <p>Rated:{film.Rated}</p>
          <p>Director:{film.Director}</p>
          <img className='film-img' src={film.PosterImages}/>
          <p>Actors:{film.Actors}</p>
          <p>Votes:{film.Votes}</p>
          <p>Plot:{film.Plot}</p>
          <p>Genre:{film.Genre}</p>
          <p>Released:{film.Released}</p>
          <p>Language:{film.Language}</p>
          

        </div>
      </div>
    </>
  );
}