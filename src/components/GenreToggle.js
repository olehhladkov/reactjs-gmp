import { useState } from 'react';
import './GenreToggle.scss';

const genreList = ['all', 'documentary', 'comedy', 'horror', 'crime'];

function GenreToggle() {
  const [activeGenre, setActiveGenre] = useState(genreList[0]);

  return (
    <div className="wrapper">
      <ul className="genre-toggle">
        {genreList.map(genre => {
          return (
            <li
              key={genre}
              className={`genre-toggle__item ${
                genre === activeGenre ? 'active' : ''
              }`}
            >
              <button
                className="genre-toggle__btn"
                type="button"
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GenreToggle;
