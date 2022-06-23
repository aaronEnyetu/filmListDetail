import { useEffect, useState } from 'react';
import './App.css';
import FilmList from './FilmList';
import { getFilms } from './services/fetch-utils';


function App() {
  const [ratedFilms, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;
  

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const movies = await getFilms(from, to);


      setFilms(movies);

    }

    fetch();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <FilmList ratedFilms={ratedFilms} />
    </>
  );


}

export default App;