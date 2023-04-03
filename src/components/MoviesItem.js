import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { defaultPosterPath } from '../utils/constants';

function MoviesItem({ movie }) {
  const { title, genres, release_date, poster_path } = movie;

  const [imgSrc, setImgSrc] = useState(poster_path);
  const [searchParams, setSearchParams] = useSearchParams();

  const showMovieDetails = () => {
    searchParams.set('movie', movie.id)
    setSearchParams(searchParams);

    window.scroll(0, 0);
  };
  const setDefaultImg = () => setImgSrc(defaultPosterPath);

  return (
    <>
      <img
        src={imgSrc}
        alt={title}
        width="320"
        height="455"
        onClick={showMovieDetails}
        onError={setDefaultImg}
      />
      <div className="movies-item__body">
        <h2 className="movies-item__title">{title}</h2>
        <div className="movies-item__date">{release_date.split('-')[0]}</div>
        <div className="movies-item__genre">{genres.join(', ')}</div>
      </div>
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
};

export default MoviesItem;
