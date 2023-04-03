import { useFormik } from 'formik';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getMoviesThunk, setSearchFields } from '../app/appSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import '../styles/SearchForm.scss';

function SearchForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchQuery = '' } = useParams();
  const [searchParams] = useSearchParams();

  const formik = useFormik({
    initialValues: {
      search: searchQuery,
    },
    onSubmit: async () => {
      await dispatch(setSearchFields({ search: formik.values.search }));
      await dispatch(getMoviesThunk());

      const searchFields = Array.from(searchParams).reduce(
        (acc, [key, value]) => {
          if (value) {
            acc[key] = value;
          }

          return acc;
        },
        {}
      );

      const searchQueryString = new URLSearchParams(searchFields).toString();

      navigate(
        `/search/${formik.values.search}${
          searchQueryString.length ? `?${searchQueryString}` : ''
        }`
      );
    },
  });

  return (
    <div className="search-form">
      <form onSubmit={formik.handleSubmit}>
        <label className="search-form__label" htmlFor="search">
          Find your movie
        </label>

        <div className="search-form__row">
          <input
            id="search"
            className="search-form__input"
            type="search"
            placeholder="What do you want to watch?"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <button type="submit" className="search-form__btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
