import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import Error from '../features/Error';
import Heading from '../features/Heading';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Main from '../features/Main';

export function AppContent() {
  return (
    <div className="App">
      <Heading pageURL="" />
      <ErrorBoundary fallback={<Error />}>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Navigate to="" replace />} />
        </Routes>
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
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
