import { useState } from 'react';
import MoviesItem from './MoviesItem';
import MoviesModal from './MoviesModal';
import moviesData from '../api/movies.json';
import '../styles/MoviesList.scss';

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
