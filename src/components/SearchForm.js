import { useFormik } from 'formik';
import { getMoviesThunk } from '../app/appSlice';
import { useDispatch } from 'react-redux';

import '../styles/SearchForm.scss';

function SearchForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: async () => {
      await dispatch(
        getMoviesThunk(`?searchBy=title&search=${formik.values.search}`)
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
