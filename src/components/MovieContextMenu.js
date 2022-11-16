import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as CloseIcon } from '../images/icons/close.svg';
import { ReactComponent as DotsIcon } from '../images/icons/dots.svg';

function MovieContextMenu({ movie, showMovieModal }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`context-menu ${expanded ? 'expanded' : ''}`}>
      <button
        type="button"
        className="context-menu__btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <CloseIcon /> : <DotsIcon />}
      </button>

      <ul className="list">
        <li className="list-item">
          <button
            type="button"
            className="list-btn"
            onClick={() => {
              showMovieModal('edit', movie);
              setExpanded(false);
            }}
          >
            Edit
          </button>
        </li>
        <li className="list-item">
          <button
            type="button"
            className="list-btn"
            onClick={() => {
              showMovieModal('delete');
              setExpanded(false);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}

MovieContextMenu.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  }),
  showMovieModal: PropTypes.func.isRequired,
};

export default MovieContextMenu;
