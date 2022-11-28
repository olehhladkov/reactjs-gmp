import PropTypes from 'prop-types';

function MoviesItem({ movie, movieClickHandler, children }) {
  const { title, genres, release_date, poster_path } = movie;

  return (
    <>
      <img
        src={poster_path}
        alt={title}
        width="320"
        height="455"
        onClick={() => movieClickHandler(movie)}
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
    poster_path: PropTypes.string.isRequired,
  }),
  movieClickHandler: PropTypes.func.isRequired,
};

export default MoviesItem;
