import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import Error from '../features/Error';
import Heading from '../features/Heading';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Main from '../features/Main';
import './App.css';

export function AppContent() {
  return (
    <div className="App">
      <Heading pageURL="" />
      <ErrorBoundary fallback={<Error />}>
        <div className="Grid-top">
          <Header />
        </div>
        <div className="Grid-mid">
          <Main />
        </div>
        <div className="Grid-btm">
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
}

function App() {
  const body = document.getElementsByTagName('body')[0];
  body.classList.add('stop-scrolling');

  setTimeout(() => {
    body.classList.remove('stop-scrolling');
  }, 5000);

  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}

export default App;
