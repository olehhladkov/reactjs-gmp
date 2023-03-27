import PropTypes from 'prop-types';
import * as Yup from 'yup';
import addMovie from '../api/addMovie.js';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { getMoviesThunk } from '../app/appSlice';
import { useState } from 'react';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  release_date: Yup.string(),
  poster_path: Yup.string().url().required('Poster url is required'),
  vote_average: Yup.number().min(0).max(100),
  runtime: Yup.number()
    .integer()
    .min(0)
    .required('Runtime is required and should be greater than 0'),
  genres: Yup.array().of(Yup.string()).required('Genres are required'),
  overview: Yup.string().required('Overview is required'),
});

function MovieForm({ movie, afterSubmitHandler }) {
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const genreOptions = useSelector((state) => state.app.filterOptionList).slice(
    1
  );

  const formik = useFormik({
    initialValues: {
      title: movie.title || '',
      release_date: movie.release_date || '',
      poster_path: movie.poster_path || '',
      vote_average: movie.vote_average || '',
      runtime: movie.runtime || '',
      genres: movie.genres || [],
      overview: movie.overview || '',
    },
    validationSchema,
    onReset: () => {
      setHasError(false);
    },
    onSubmit: async (values) => {
      setHasError(false);

      const formData = values;

      if (movie.id) {
        formData.id = movie.id;
      }

      const response = await addMovie(formData);

      if (response.ok) {
        await dispatch(getMoviesThunk());
        afterSubmitHandler();
      } else {
        setHasError(true);
      }
    },
  });

  const maxDate = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter a title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <span className="error">{formik.errors.title}</span>
          ) : null}
        </div>
        <div className="form-col">
          <label htmlFor="release_date">release date</label>
          <input
            type="date"
            max={maxDate}
            id="release_date"
            placeholder="Enter a date"
            onChange={formik.handleChange}
            value={formik.values.release_date}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label htmlFor="poster_path">poster url</label>
          <input
            type="url"
            id="poster_path"
            placeholder="https://"
            onChange={formik.handleChange}
            value={formik.values.poster_path}
          />
          {formik.touched.poster_path && formik.errors.poster_path ? (
            <span className="error">{formik.errors.poster_path}</span>
          ) : null}
        </div>
        <div className="form-col">
          <label htmlFor="vote_average">rating</label>
          <input
            type="number"
            id="vote_average"
            placeholder="7.8"
            onChange={formik.handleChange}
            value={formik.values.vote_average}
          />
          {formik.touched.vote_average && formik.errors.vote_average ? (
            <span className="error">{formik.errors.vote_average}</span>
          ) : null}
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label htmlFor="genres">genres</label>
          <select
            id="genres"
            placeholder="Select genres"
            multiple
            onChange={formik.handleChange}
            value={formik.values.genres}
          >
            {genreOptions.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          {formik.touched.genres && formik.errors.genres ? (
            <span className="error">{formik.errors.genres}</span>
          ) : null}
        </div>
        <div className="form-col">
          <label htmlFor="runtime">runtime</label>
          <input
            type="number"
            id="runtime"
            placeholder="minutes"
            onChange={formik.handleChange}
            value={formik.values.runtime}
          />
          {formik.touched.runtime && formik.errors.runtime ? (
            <span className="error">{formik.errors.runtime}</span>
          ) : null}
        </div>
      </div>

      <div className="form-row">
        <div className="form-col">
          <label htmlFor="overview">overview</label>
          <textarea
            id="overview"
            rows="6"
            placeholder="Movie description"
            onChange={formik.handleChange}
            value={formik.values.overview}
          />
          {formik.touched.overview && formik.errors.overview ? (
            <span className="error">{formik.errors.overview}</span>
          ) : null}
        </div>
      </div>

      {hasError && <div className="error=message">Something went wrong!</div>}

      <div className="actions">
        <button
          type="reset"
          className="btn-outline"
          onClick={formik.handleReset}
        >
          reset
        </button>
        <button type="submit" className="btn" disabled={formik.isSubmitting}>
          submit
        </button>
      </div>
    </form>
  );
}

MovieForm.propTypes = {
  movie: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      genres: PropTypes.array,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }),
    PropTypes.object,
  ]),
};

export default MovieForm;
