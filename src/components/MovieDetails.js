import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultPosterPath } from '../utils/constants';
import { formatToTimeString } from '../utils/formatToTimeString';
import { getMovieByIdThunk } from '../app/appSlice';
import '../styles/MovieDetails.scss';

function MovieDetails({ id = '' }) {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let promise;

    try {
      setIsLoading(true);
      promise = dispatch(getMovieByIdThunk(id));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }

    return () => {
      promise?.abort();
    };
  }, [dispatch, id]);

  const {
    id: movieId,
    title = '',
    genres = [],
    release_date = '',
    poster_path = '',
    vote_average = null,
    runtime = null,
    overview = '',
  } = useSelector((state) => state.app.currentMovie);

  const [imgSrc, setImgSrc] = useState(poster_path);

  const isMovieVisible = title && !isLoading && !error;
  const hasError = !isMovieVisible;

  return (
    <div className="movie-details">
      {isLoading && <h2>Loading...</h2>}
      {hasError && (
        <h2>Something went wrong. Please try again later!</h2>
      )}
      {isMovieVisible && (
        <>
          <img
            src={imgSrc}
            key={movieId}
            alt={title}
            width="320"
            height="455"
            onLoad={() => setImgSrc(poster_path)}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = defaultPosterPath;
            }}
          />
          <div className="movie-details__content">
            <div className="movie-details__heading">
              <h2 className="movie-details__title">{title}</h2>
              <div className="movie-details__rating">{vote_average}</div>
            </div>

            <div className="movie-details__genre">{genres.join(', ')}</div>

            <div className="movie-details__body">
              <div>{release_date.split('-')[0]}</div>
              <div>{formatToTimeString(runtime)}</div>
            </div>
            <p>{overview}</p>
          </div>
        </>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  id: PropTypes.string,
};

export default MovieDetails;
