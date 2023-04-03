import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getMoviesThunk, setSearchFields } from '../app/appSlice';
import '../styles/GenreToggle.scss';

function GenreToggle() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterOptionList = useSelector((state) => state.app.filterOptionList);
  const filterOptionSelected =
    useSelector((state) => state.app.searchFields.genre) || '';

  const applyFilter = async (filterOption) => {
    await dispatch(setSearchFields({ genre: filterOption }));
    await dispatch(getMoviesThunk());

    if (filterOption) {
      searchParams.set('genre', filterOption);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('genre');
      setSearchParams(searchParams);
    }
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
