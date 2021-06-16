// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '@utils/test-utils';
import Home from '@pages/index';

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<Home />);

    const heading = screen.getByText('App working 🚀');

    expect(heading).toBeInTheDocument();
  });
});
