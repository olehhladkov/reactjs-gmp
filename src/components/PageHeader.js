import { useState } from 'react';
import SearchForm from './SearchForm';
import MoviesModal from './MoviesModal';
import logo from '../images/logo.svg';
import '../styles/PageHeader.scss';

export default function PageHeader() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <header className={`page-header ${modalVisible ? 'has-modal' : ''}`}>
      <div className="page-header__panel">
        <a href="/">
          <img src={logo} alt="Netflix roulette" />
        </a>
        <button
          type="button"
          className="btn"
          onClick={() => setModalVisible(true)}
        >
          + Add movie
        </button>
      </div>

      <SearchForm />

      <MoviesModal
        show={modalVisible}
        type="add"
        movie={{}}
        onClose={() => setModalVisible(false)}
      />
    </header>
  );
}
