import PageHeader from './components/PageHeader';
import PageMain from './components/PageMain';
import PageFooter from './components/PageFooter';
import ErrorBoundary from './ErrorBoundary';
import './App.scss';

function App() {
  return (
    <div className="page">
      <ErrorBoundary>
        <PageHeader className="page-header" />
      </ErrorBoundary>

      <ErrorBoundary>
        <PageMain className="page-main" />
      </ErrorBoundary>

      <ErrorBoundary>
        <PageFooter className="page-footer" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
