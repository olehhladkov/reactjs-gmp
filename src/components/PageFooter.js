import logo from '../images/logo.svg';

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <a href="/">
        <img src={logo} alt="Netflix roulette" />
      </a>
    </footer>
  );
}
