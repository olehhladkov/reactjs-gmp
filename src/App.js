import { useState } from 'react';
import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import PageFooter from './components/PageFooter';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';
import MoviesModal from './components/MoviesModal';
import ErrorBoundary from './utils/ErrorBoundary';
import './styles/App.scss';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieModal, setMovieModal] = useState({ type: 'add', data: {} });

  const showMovieModal = (type, movieData) => {
    setMovieModal({ type, data: movieData });
    setIsModalVisible(true);
  };

  const headerBtn = (
    <button type="button" className="btn" onClick={() => showMovieModal('add')}>
      + Add movie
    </button>
  );

  return (
    <div className="page">
      <ErrorBoundary>
        <PageHeader className="page-header" headerBtn={headerBtn}>
          <SearchForm />
        </PageHeader>
      </ErrorBoundary>

      <ErrorBoundary>
        <PageMain moviesList={<MoviesList showMovieModal={showMovieModal} />} />
      </ErrorBoundary>

      <ErrorBoundary>
        <PageFooter className="page-footer" />
      </ErrorBoundary>

      <ErrorBoundary>
        <MoviesModal
          show={isModalVisible}
          type={movieModal.type}
          movie={movieModal.data}
          onClose={() => setIsModalVisible(false)}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
