import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import PageFooter from './components/PageFooter';
import './styles/App.scss';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('search');
    }
  }, [location, navigate]);

  return (
    <div className="page">
      <Routes>
        <Route
          path="search/:searchQuery?"
          element={<Search showMovieModal={() => showMovieModal('add')} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <PageFooter className="page-footer" />
    </div>
  );
}

export default App;
