import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import Error from '../features/Error';
import Heading from '../features/Heading';
import Header from '../features/Header';
import Footer from '../features/Footer';
import Main from '../features/Main';
import NotFound from '../features/NotFound';
import './App.css';

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
                <div className="Grid-top">
                  <Header />
                </div>
                <div className="Grid-mid">
                  <Main />
                </div>
                <div className="Grid-btm">
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
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
