import PropTypes from 'prop-types';
import deleteMovie from '../api/deleteMovie';
import MovieForm from './MovieForm';
import { useDispatch } from 'react-redux';
import { getMoviesThunk } from '../app/appSlice';
import { ReactComponent as CloseIcon } from '../images/icons/close-lg.svg';

function MoviesModal({ show, type, movie = {}, onClose, onMovieDelete }) {
  const dispatch = useDispatch();

  if (!show) {
    return null;
  }

  const isDeleteModal = type === 'delete';

  const handleMovieDelete = async (id) => {
    await deleteMovie(id);
    await dispatch(getMoviesThunk());

    onMovieDelete();
  };

  return (
    <div className="modal-dialog">
      <div className="modal-backdrop" onClick={onClose}></div>

      <div className="modal-content">
        <button type="button" className="modal-close" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal-body">
          <h2 className="modal-title">{type} movie</h2>

          <div className="form">
            {isDeleteModal ? (
              <>
                <p>Are you sure you want to delete this movie?</p>

                <div className="actions">
                  <button
                    className="btn"
                    onClick={() => handleMovieDelete(movie.id)}
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : (
              <MovieForm movie={movie} afterSubmitHandler={onClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

MoviesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['add', 'edit', 'delete']).isRequired,
  movie: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      genres: PropTypes.array,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }),
    PropTypes.object,
  ]),
  onClose: PropTypes.func.isRequired,
};

export default MoviesModal;
