import { useSelector, useDispatch } from 'react-redux';
import { getMoviesThunk, setFilterBy } from '../app/appSlice';
import '../styles/GenreToggle.scss';

function GenreToggle() {
  const filterByList = useSelector(state => state.app.filterByList);
  const filterBy = useSelector(state => state.app.filterBy);
  const sortBy = useSelector(state => state.app.sortBy);

  const dispatch = useDispatch();

  const applyFilter = filterBy => {
    dispatch(setFilterBy(filterBy));
    dispatch(getMoviesThunk(`?filter=${filterBy}&sortBy=${sortBy.value}`));
  };

  return (
    <ul className="genre-toggle">
      {filterByList.map(genre => {
        return (
          <li
            key={genre}
            className={`genre-toggle__item ${
              genre === filterBy ? 'active' : ''
            }`}
          >
            <button
              className="genre-toggle__btn"
              type="button"
              disabled={genre === filterBy}
              onClick={() => applyFilter(genre)}
            >
              {genre || 'All'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default GenreToggle;
