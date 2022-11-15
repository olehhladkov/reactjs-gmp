import SearchForm from './SearchForm';
import logo from '../logo.svg';
import './PageHeader.scss';

export default function PageHeader() {
  return (
    <header className="page-header">
      <div className="page-header__panel">
        <a href="/">
          <img src={logo} alt="Netflix roulette" />
        </a>
        <button type="button" className="btn">
          + Add movie
        </button>
      </div>

      <SearchForm />
    </header>
  );
}
