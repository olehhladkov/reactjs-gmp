import PropTypes from 'prop-types';
import { formatToTimeString } from '../utils/formatToTimeString';
import '../styles/MovieDetails.scss';

function MovieDetails({ movie }) {
  const {
    title,
    genres,
    release_date,
    poster_path,
    vote_average,
    runtime,
    overview,
  } = movie;

  return (
    <div className="movie-details">
      <img src={poster_path} alt={title} width="320" height="455" />

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
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
};

export default MovieDetails;
