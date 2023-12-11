import { render, screen } from '../test/test-utils';
import { AppContent } from '.';

describe('app component', () => {
  test('should render correctly', async () => {
    render(<AppContent />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
