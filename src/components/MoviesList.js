import PropTypes from 'prop-types';
import MoviesItem from './MoviesItem';
import MovieContextMenu from './MovieContextMenu';
import moviesData from '../api/movies.json';
import '../styles/MoviesList.scss';

function MoviesList({ showMovieModal, movieClickHandler }) {
  return (
    <div className="movies-wrapper">
      <div className="movies-count">
        <strong>{moviesData.length}</strong> movies found
      </div>

      <ul className="movies-list">
        {moviesData.map(movie => {
          return (
            <li className="movies-item" key={movie.id}>
              <MovieContextMenu movie={movie} showMovieModal={showMovieModal} />
              <MoviesItem movie={movie} movieClickHandler={movieClickHandler} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

MoviesList.propTypes = {
  showMovieModal: PropTypes.func.isRequired,
  movieClickHandler: PropTypes.func.isRequired,
};

export default MoviesList;
