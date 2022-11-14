import { useState } from 'react';
import './SearchForm.scss';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = e => {
    return setSearchTerm(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (!searchTerm.length) {
      return;
    }

    console.log({ searchTerm });
  };

  return (
    <div className="search-form">
      <form action="#" onSubmit={onFormSubmit}>
        <label className="search-form__label" htmlFor="search-term">
          Find your movie
        </label>

        <div className="search-form__row">
          <input
            id="search-term"
            className="search-form__input"
            type="search"
            placeholder="What do you want to watch?"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button className="search-form__btn" disabled={!searchTerm.length}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
