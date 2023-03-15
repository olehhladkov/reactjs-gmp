import PropTypes from 'prop-types';
import deleteMovie from '../api/deleteMovie';
import { useDispatch } from 'react-redux';
import { getMoviesThunk } from '../app/appSlice';
import { ReactComponent as CloseIcon } from '../images/icons/close-lg.svg';

function MoviesModal({ show, type, movie = {}, onClose }) {
  const dispatch = useDispatch();

  if (!show) {
    return null;
  }

  const isDeleteModal = type === 'delete';

  const onMovieDelete = async (id) => {
    await deleteMovie(id);
    await dispatch(getMoviesThunk());

    onClose();
  }

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
                    onClick={() => onMovieDelete(movie.id)}
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : (
              <form action="#">
                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="title">title</label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Enter a title"
                      defaultValue={movie.title}
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="release_date">release date</label>
                    <input
                      type="text"
                      id="release_date"
                      placeholder="Select Date"
                      defaultValue={movie.release_date}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="movie_url">movie url</label>
                    <input
                      type="url"
                      id="movie_url"
                      placeholder="https://"
                      defaultValue={movie.movie_url}
                    />
                  </div>
                  <div className="form-col">
                    <label htmlFor="rating">rating</label>
                    <input
                      type="text"
                      id="rating"
                      placeholder="7.8"
                      defaultValue={movie.vote_average}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="genre">genre</label>
                    <select id="genre" defaultValue={'select genre'}>
                      <option value="select genre" disabled>
                        Select Genre
                      </option>
                      <option value="Crime">Crime</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Horror">Horror</option>
                      <option value="Comedy">Comedy</option>
                    </select>
                  </div>
                  <div className="form-col">
                    <label htmlFor="runtime">runtime</label>
                    <input
                      type="text"
                      id="runtime"
                      placeholder="minutes"
                      defaultValue={movie.runtime}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label htmlFor="overview">overview</label>
                    <textarea
                      id="overview"
                      rows="6"
                      placeholder="Movie description"
                      defaultValue={movie.overview}
                    ></textarea>
                  </div>
                </div>

                <div className="actions">
                  <button type="reset" className="btn-outline">
                    reset
                  </button>
                  <button className="btn">submit</button>
                </div>
              </form>
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
