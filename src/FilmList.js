import Film from './Film.js';

export default function FilmList({ ratedFilms }) {
  return (
    <div className='films'>
      {ratedFilms.map((film, i) => (
        <Film key={film.Title + i + film.id} {...film} />
      ))}
    </div>
  );
}