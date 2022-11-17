import logo from '../images/logo.svg';
import '../styles/PageHeader.scss';

export default function PageHeader({ hasBackground, headerBtn, children }) {
  return (
    <header className={`page-header ${hasBackground ? 'has-background' : ''}`}>
      <div className="page-header__panel">
        <a href="/">
          <img src={logo} alt="Netflix roulette" />
        </a>

        {headerBtn}
      </div>

      {children}
    </header>
  );
}
