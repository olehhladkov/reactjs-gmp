import ResultsSort from './ResultsSort';
import GenreToggle from './GenreToggle';

export default function PageMain({ moviesList }) {
  return (
    <main className="page-main">
      <div className="results-panel">
        <GenreToggle />
        <ResultsSort />
      </div>

      {moviesList}
    </main>
  );
}
