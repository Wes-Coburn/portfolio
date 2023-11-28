import { render, screen } from '../test/test-utils';
import App from '.';

describe('app component', () => {
  test('should render correctly', async () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
