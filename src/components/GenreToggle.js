import { useSelector, useDispatch } from 'react-redux';
import { getMoviesThunk, setFilterOption } from '../app/appSlice';
import '../styles/GenreToggle.scss';

function GenreToggle() {
  const filterOptionList = useSelector((state) => state.app.filterOptionList);
  const filterOptionSelected = useSelector(
    (state) => state.app.filterOptionSelected
  );
  const sortOptionSelected = useSelector(
    (state) => state.app.sortOptionSelected
  );

  const dispatch = useDispatch();

  const applyFilter = (filterOption) => {
    dispatch(setFilterOption(filterOption));
    dispatch(
      getMoviesThunk(
        `?filter=${filterOption}&sortBy=${sortOptionSelected.value}`
      )
    );
  };

  return (
    <ul className="genre-toggle">
      {filterOptionList.map((genre) => {
        return (
          <li
            key={genre}
            className={`genre-toggle__item ${
              genre === filterOptionSelected ? 'active' : ''
            }`}
          >
            <button
              className="genre-toggle__btn"
              type="button"
              disabled={genre === filterOptionSelected}
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
