import PropTypes from 'prop-types';
import MovieContextMenu from './MovieContextMenu';

function MoviesItem({ movie, showMovieModal }) {
  const { title, genre, release_date, img } = movie;

  return (
    <>
      <MovieContextMenu movie={movie} showMovieModal={showMovieModal} />

      <img
        src={require(`../images/${img}.jpg`)}
        alt={title}
        width="320"
        height="455"
      />
      <div className="movies-item__body">
        <h2 className="movies-item__title">{title}</h2>
        <div className="movies-item__date">{release_date}</div>
        <div className="movies-item__genre">{genre.join(', ')}</div>
      </div>
    </>
  );
}

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    genre: PropTypes.array,
    release_date: PropTypes.number,
  }),
  showMovieModal: PropTypes.func.isRequired,
};

export default MoviesItem;
