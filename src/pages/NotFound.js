import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <header className="page-header">
        <h1 className="text-white">Page not found.</h1>
        <NavLink to="/" className="text-white">
          Go to home page
        </NavLink>
      </header>
    </>
  );
}

export default NotFound;
