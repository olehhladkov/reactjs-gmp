import { useState } from 'react';
import MoviesItem from './MoviesItem';
import MoviesModal from './MoviesModal';
import './MoviesList.scss';

const moviesData = [
  {
    title: 'Pulp Fiction',
    genre: ['Action & Adventure'],
    release_date: 2004,
    img: 'pulp_fiction',
  },
  {
    title: 'Bohemian Rhapsody',
    genre: ['Drama', 'Biography', 'Music'],
    release_date: 2003,
    img: 'bohemian_rhapsody',
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: ['Oscar winning Movie'],
    release_date: 1994,
    img: 'kill_bill',
  },
  {
    title: 'Avengers: War of Infinity',
    genre: ['Action & Adventure'],
    release_date: 2004,
    img: 'avengers',
  },
  {
    title: 'Inception',
    genre: ['Action & Adventure'],
    release_date: 2003,
    img: 'inception',
  },
  {
    title: 'Reservoir dogs',
    genre: ['Oscar winning Movie'],
    release_date: 1994,
    img: 'reservoir_dogs',
  },
];

function MoviesList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [movie, setMovie] = useState({});

  const showMovieModal = (type, movie) => {
    setModalType(type);
    setMovie(movie);
    setModalVisible(true);
  };

  return (
    <div className="movies-wrapper">
      <div className="movies-count">
        <strong>39</strong> movies found
      </div>

      <ul className="movies-list">
        {moviesData.map(movie => {
          return (
            <li className="movies-item" key={movie.title}>
              <MoviesItem movie={movie} showMovieModal={showMovieModal} />
            </li>
          );
        })}
      </ul>

      <MoviesModal
        show={modalVisible}
        type={modalType}
        movie={movie}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
}

export default MoviesList;
