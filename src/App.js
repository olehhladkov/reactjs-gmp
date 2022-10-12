import './App.css';
import ComponentsList from './components/ComponentsList.js';
import Counter from './components/Counter.js';
import SearchForm from './components/SearchForm.js';

function App() {
  return (
    <div className="App">
      <ComponentsList />
      <hr />
      <Counter />
      <hr />
      <SearchForm />
    </div>
  );
}

export default App;
