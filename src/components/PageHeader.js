import PropTypes from 'prop-types';
import HeaderBtn from './HeaderBtn';
import logo from '../images/logo.svg';
import '../styles/PageHeader.scss';

export default function PageHeader({
  hasBackground,
  isMovieDetailsMode,
  toggleMovieDetailsMode,
  children,
}) {
  return (
    <header className={`page-header ${hasBackground ? 'has-background' : ''}`}>
      <div className="page-header__panel">
        <a href="/">
          <img src={logo} alt="Netflix roulette" />
        </a>

        <HeaderBtn
          isMovieDetailsMode={isMovieDetailsMode}
          toggleMovieDetailsMode={toggleMovieDetailsMode}
        />
      </div>

      {children}
    </header>
  );
}

PageHeader.propTypes = {
  hasBackground: PropTypes.bool.isRequired,
  isMovieDetailsMode: PropTypes.bool.isRequired,
  toggleMovieDetailsMode: PropTypes.func.isRequired,
};
