import { render, screen, waitFor } from '../test/test-utils';
import App from '.';

describe('app component', () => {
  test('should display loading text before lazy render', async () => {
    render(<App />);
    expect(screen.getAllByText(/loading/i).length).toBe(3);
  });

  test('should lazy render correctly', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByRole('main')).toBeInTheDocument());
  });
});
