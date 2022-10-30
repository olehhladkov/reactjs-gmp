import './SearchForm.scss';

function SearchForm() {
  return (
    <div className="search-form">
      <form action="#">
        <label className="search-form__label" htmlFor="search-term">
          Find your movie
        </label>

        <div className="search-form__row">
          <input
            id="search-term"
            className="search-form__input"
            type="search"
            placeholder="What do you want to watch?"
          />
          <button className="search-form__btn">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
