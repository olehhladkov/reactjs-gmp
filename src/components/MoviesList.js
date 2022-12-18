import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MoviesItem from './MoviesItem';
import MovieContextMenu from './MovieContextMenu';
import { getMoviesThunk } from '../app/appSlice';
import '../styles/MoviesList.scss';

function MoviesList({ showMovieModal, showMovieDetails }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let promise;

    try {
      setIsLoading(true);
      promise = dispatch(getMoviesThunk());
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }

    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise?.abort();
    };
  }, [dispatch]);

  const moviesList = useSelector(state => state.app.moviesList);
  const showMoviesList = !isLoading && moviesList?.length > 0;
  const showNotFoundMessage = !isLoading && moviesList?.length === 0;
  const showErrorMessage = !isLoading && error;

  return (
    <div className="movies-wrapper">
      {isLoading && <h2>Loading...</h2>}
      {showNotFoundMessage && <h2>No items were found!</h2>}
      {showErrorMessage && (
        <h2>Something went wrong. Please try again later!</h2>
      )}
      {showMoviesList && (
        <>
          <div className="movies-count">
            <strong>{moviesList.length}</strong> movies found
          </div>

          <ul className="movies-list">
            {moviesList.map(movie => {
              return (
                <li className="movies-item" key={movie.id}>
                  <MovieContextMenu
                    movie={movie}
                    showMovieModal={showMovieModal}
                  />
                  <MoviesItem
                    movie={movie}
                    showMovieDetails={showMovieDetails}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

MoviesList.propTypes = {
  showMovieModal: PropTypes.func.isRequired,
  showMovieDetails: PropTypes.func.isRequired,
};

export default MoviesList;
