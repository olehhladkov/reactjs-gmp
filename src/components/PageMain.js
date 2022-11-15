import ResultsSort from './ResultsSort';
import GenreToggle from './GenreToggle';
import MoviesList from './MoviesList';

export default function PageMain() {
  return (
    <main className="page-main">
      <div className="results-panel">
        <GenreToggle />
        <ResultsSort />
      </div>

      <MoviesList />
    </main>
  );
}
