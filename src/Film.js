import { Link } from 'react-router-dom';


export default function Film({ id, PosterImages, Title }) {
  return (

    <Link to={`/films/${id}`}>
      <div className='film'>
        <img className='film-img' src={PosterImages} />
        <p>{Title}</p>
      </div>
    </Link>
  );
}