import { useState } from 'react';
import PropTypes from 'prop-types';

function MovieContextMenu({ movie, showMovieModal }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`context-menu ${expanded ? 'expanded' : ''}`}>
      <button
        type="button"
        className="context-menu__btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              d="m1.097 1.595 9.806 10.029M10.903 1.595 1.097 11.624"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="none"
          >
            <circle cx="22" cy="15" r="2" fill="#fff" />
            <circle cx="22" cy="22.5" r="2" fill="#fff" />
            <circle cx="22" cy="30" r="2" fill="#fff" />
          </svg>
        )}
      </button>

      <ul className="list">
        <li className="list-item">
          <button
            type="button"
            className="list-btn"
            onClick={() => {
              showMovieModal('edit', {
                ...movie,
                overview: `Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators.`,
                movie_url: 'https://www.moana.com',
                rating: 7.6,
                runtime: '1h 47min',
              });
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
    img: PropTypes.string.isRequired,
    genre: PropTypes.array,
    release_date: PropTypes.number,
  }),
  showMovieModal: PropTypes.func.isRequired,
};

export default MovieContextMenu;
