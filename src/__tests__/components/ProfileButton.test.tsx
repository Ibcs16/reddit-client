// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '@utils/test-utils';
import ProfileButton from '@components/ProfileButton';

describe('ProfileButton', () => {
  it('should render profile button elements', () => {
    render(<ProfileButton nickName="Ibcs16" karmaCount={2} />);

    const buttonElement = screen.getByRole('button');
    const nickNameElement = screen.getByText('Ibcs16');
    const karmaElement = screen.getByText('2 karmas');

    const profileButtonElements = [
      buttonElement,
      nickNameElement,
      karmaElement
    ];

    profileButtonElements.forEach((element) =>
      expect(element).toBeInTheDocument()
    );
  });
});
