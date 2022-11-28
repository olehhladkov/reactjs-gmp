import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';

export default function HeaderBtn({
  isMovieDetailsMode,
  toggleMovieDetailsMode,
}) {
  return (
    <button
      type="button"
      className={`${isMovieDetailsMode ? 'btn-link' : 'btn'}`}
      onClick={toggleMovieDetailsMode}
    >
      {isMovieDetailsMode ? <SearchIcon /> : <span>+ Add movie</span>}
    </button>
  );
}

HeaderBtn.propTypes = {
  isMovieDetailsMode: PropTypes.bool.isRequired,
  toggleMovieDetailsMode: PropTypes.func.isRequired,
};
