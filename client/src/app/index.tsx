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
    <div className="bg-gray-300">
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
  const stopScroll = 'stop-scrolling';
  const overflowHide = 'overflow-hidden';
  const body = document.getElementsByTagName('body')[0];

  body.classList.add(stopScroll);
  body.classList.add(overflowHide);

  setTimeout(() => {
    body.classList.remove(stopScroll);
    body.classList.remove(overflowHide);
  }, 5000);

  return (
    <HelmetProvider>
      <Router>
        <Heading pageURL="" />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
