import './App.css';
import ComponentsList from './components/ComponentsList.js';
import Counter from './components/Counter.js';
import SearchForm from './components/SearchForm.js';
import GenreToggle from './components/GenreToggle.js';

function App() {
  return (
    <div className="App">
      <ComponentsList />
      <hr />
      <Counter />
      <hr />
      <SearchForm />
      <hr />
      <GenreToggle />
    </div>
  );
}

export default App;
