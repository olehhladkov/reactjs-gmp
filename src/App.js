import { useState } from 'react';
import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import PageFooter from './components/PageFooter';
import SearchForm from './components/SearchForm';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import MoviesModal from './components/MoviesModal';
import ErrorBoundary from './utils/ErrorBoundary';
import { ReactComponent as SearchIcon } from './images/icons/search.svg';
import './styles/App.scss';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMovieDetailsMode, setIsMovieDetailsMode] = useState(false);
  const [movieDetails, setMovieDetails] = useState({ type: 'add', data: {} });

  const showMovieModal = (type, movieData) => {
    setMovieDetails({ type, data: movieData });
    setIsModalVisible(true);
  };

  const handleHeaderBtnClick = () => {
    return isMovieDetailsMode
      ? setIsMovieDetailsMode(false)
      : showMovieModal('add');
  };

  const handleMovieClick = movie => {
    setIsMovieDetailsMode(true);
    setMovieDetails({ ...movieDetails, data: movie });
  };

  const headerBtn = (
    <button
      type="button"
      className={`${isMovieDetailsMode ? 'btn-link' : 'btn'}`}
      onClick={handleHeaderBtnClick}
    >
      {isMovieDetailsMode ? <SearchIcon /> : <span>+ Add movie</span>}
    </button>
  );

  return (
    <div className="page">
      <ErrorBoundary>
        <PageHeader
          className="page-header"
          headerBtn={headerBtn}
          hasBackground={!isMovieDetailsMode}
        >
          {isMovieDetailsMode ? (
            <MovieDetails movie={movieDetails.data} />
          ) : (
            <SearchForm />
          )}
        </PageHeader>
      </ErrorBoundary>

      <ErrorBoundary>
        <PageMain
          moviesList={
            <MoviesList
              showMovieModal={showMovieModal}
              handleMovieClick={handleMovieClick}
            />
          }
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <PageFooter className="page-footer" />
      </ErrorBoundary>

      <ErrorBoundary>
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
