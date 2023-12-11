import { cleanup, render, waitFor } from '@testing-library/react';
import { beforeEach, afterEach } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import setupIntersectionObserverMock from './mocks';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  setupIntersectionObserverMock();
});

afterEach(() => {
  cleanup();
});

function customRender(ui: JSX.Element, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <HelmetProvider>
        <Router>{children}</Router>
      </HelmetProvider>
    ),
    ...options,
  });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render, waitFor };
