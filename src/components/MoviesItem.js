import PropTypes from 'prop-types';
import MovieContextMenu from './MovieContextMenu';

function MoviesItem({ movie, showMovieModal }) {
  const { title, genres, release_date, poster_path } = movie;

  return (
    <>
      <MovieContextMenu movie={movie} showMovieModal={showMovieModal} />

      <img src={poster_path} alt={title} width="320" height="455" />
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
    poster_path: PropTypes.string.isRequired,
  }),
  showMovieModal: PropTypes.func.isRequired,
};

export default MoviesItem;
