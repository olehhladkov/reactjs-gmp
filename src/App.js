import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import PageFooter from './components/PageFooter';
import './App.css';

function App() {
  return (
    <div className="page">
      <PageHeader className="page-header" />
      <PageMain className="page-main" />
      <PageFooter className="page-footer" />
    </div>
  );
}

export default App;
