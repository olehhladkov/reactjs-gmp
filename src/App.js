import { useState } from 'react';
import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import PageFooter from './components/PageFooter';
import SearchForm from './components/SearchForm';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import MoviesModal from './components/MoviesModal';
import ErrorBoundary from './utils/ErrorBoundary';
import './styles/App.scss';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMovieDetailsMode, setIsMovieDetailsMode] = useState(false);
  const [movieDetails, setMovieDetails] = useState({ type: 'add', data: {} });

  const showMovieModal = (type, movieData) => {
    setMovieDetails({ type, data: movieData });
    setIsModalVisible(true);
  };

  const toggleMovieDetailsMode = () => {
    return isMovieDetailsMode
      ? setIsMovieDetailsMode(false)
      : showMovieModal('add');
  };

  const movieClickHandler = movie => {
    setIsMovieDetailsMode(true);
    setMovieDetails({ ...movieDetails, data: movie });
  };

  return (
    <div className="page">
      <ErrorBoundary>
        <PageHeader
          className="page-header"
          hasBackground={!isMovieDetailsMode}
          isMovieDetailsMode={isMovieDetailsMode}
          toggleMovieDetailsMode={toggleMovieDetailsMode}
        >
          {isMovieDetailsMode ? (
            <MovieDetails movie={movieDetails.data} />
          ) : (
            <SearchForm />
          )}
        </PageHeader>

        <PageMain
          moviesList={
            <MoviesList
              showMovieModal={showMovieModal}
              movieClickHandler={movieClickHandler}
            />
          }
        />

        <PageFooter className="page-footer" />

        <MoviesModal
          show={isModalVisible}
          type={movieDetails.type}
          movie={movieDetails.data}
          onClose={() => setIsModalVisible(false)}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
