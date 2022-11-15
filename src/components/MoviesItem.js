function MoviesItem({ movie }) {
  const { title, genre, release_date, img } = movie;

  return (
    <>
      <div className="context-menu">
        <button type="button" className="context-menu__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="none"
          >
            <circle cx="22" cy="15" r="2" fill="#fff" />
            <circle cx="22" cy="22.5" r="2" fill="#fff" />
            <circle cx="22" cy="30" r="2" fill="#fff" />
          </svg>
        </button>
      </div>

      <img
        src={require(`../images/${img}.jpg`)}
        alt={title}
        width="320"
        height="455"
      />
      <div className="movies-item__body">
        <h2 className="movies-item__title">{title}</h2>
        <div className="movies-item__date">{release_date}</div>
        <div className="movies-item__genre">{genre.join(', ')}</div>
      </div>
    </>
  );
}

export default MoviesItem;
