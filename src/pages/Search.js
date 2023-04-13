import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import SearchForm from '../components/SearchForm';
import GenreToggle from '../components/GenreToggle';
import ResultsSort from '../components/ResultsSort';
import MoviesList from '../components/MoviesList';
import MoviesModal from '../components/MoviesModal';
import { setSearchFields } from '../app/appSlice';
import logo from '../images/logo.svg';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import '../styles/PageHeader.scss';

function Search() {
  const dispatch = useDispatch();

  const { searchQuery = '' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movie');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState('add');
  const [movie, setMovie] = useState({});

  const searchFields = Array.from(searchParams).reduce((acc, [key, value]) => {
    if (value) {
      acc[key] = value;
    }

    return acc;
  }, {});
  searchFields.search = searchQuery;

  useEffect(() => {
    dispatch(setSearchFields(searchFields));
  }, [dispatch, searchFields]);

  const showMovieModal = (type, movie) => {
    setIsModalVisible(true);
    setModalType(type);
    setMovie(movie);
  };

  const goToSearch = () => {
    searchParams.delete('movie');
    setSearchParams(searchParams);
  };

  return (
    <>
      <header className={`page-header ${movieId ? '' : 'has-background'}`}>
        <div className="page-header__panel">
          <a href="/">
            <img src={logo} alt="Netflix roulette" />
          </a>

          {movieId ? (
            <button type="button" className="btn-link" onClick={goToSearch}>
              <SearchIcon />
            </button>
          ) : (
            <button
              type="button"
              className="btn"
              onClick={() => showMovieModal('add')}
            >
              <span>+ Add movie</span>
            </button>
          )}
        </div>
        {movieId ? <MovieDetails id={movieId} /> : <SearchForm />}
      </header>

      <div className="results-panel">
        <GenreToggle />
        <ResultsSort />
      </div>

      <main className="page-main">
        <MoviesList showMovieModal={showMovieModal} />
      </main>

      <MoviesModal
        show={isModalVisible}
        movie={movie}
        type={modalType}
        onClose={() => setIsModalVisible(false)}
        onMovieDelete={() => setIsModalVisible(false)}
      />
    </>
  );
}

export default Search;
