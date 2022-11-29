import PropTypes from 'prop-types';
import { useState } from 'react';

function MoviesItem({ movie, showMovieDetails, children }) {
  const { title, genres, release_date, poster_path } = movie;
  const [imgSrc, setImgSrc] = useState(poster_path);

  const onError = () => setImgSrc('https://via.placeholder.com/320x455');

  return (
    <>
      <img
        src={imgSrc}
        alt={title}
        width="320"
        height="455"
        onClick={() => showMovieDetails(movie)}
        onError={onError}
      />
      <div className="movies-item__body">
        <h2 className="movies-item__title">{title}</h2>
        <div className="movies-item__date">{release_date.split('-')[0]}</div>
        <div className="movies-item__genre">{genres.join(', ')}</div>
      </div>

      {children}
    </>
  );
}

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    poster_path: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
  }),
  showMovieDetails: PropTypes.func.isRequired,
};

export default MoviesItem;
