// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '@utils/test-utils';
import PostItem from '@components/PostsList/PostItem';
import getTimeFromNow from '@utils/getTimeFromNow';

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  }
}));

const mockedProps = {
  id: '1',
  title: 'Developer gets a job at deviget',
  created_utc: new Date().getMilliseconds(),
  author: 'author',
  thumbnail: 'https://images.example.com',
  num_comments: 2,
  read: false,
  subreddit: 'subreddit',
  permalink: 'r/subreddit/comments/',
  url: 'fake-url'
};
describe('PostItem', () => {
  it('should render post item elements', () => {
    render(<PostItem data={mockedProps} />);

    const subredditElement = screen.getByText('r/subreddit');
    const fromMockedDate = getTimeFromNow(mockedProps.created_utc);
    const postedByElement = screen.getByText(
      `Posted by author ${fromMockedDate}`
    );
    const commentsElement = screen.getByText('2 comments');

    const postItemElements = [
      subredditElement,
      postedByElement,
      commentsElement
    ];

    postItemElements.forEach((element) => expect(element).toBeInTheDocument());
    expect(commentsElement).toHaveAttribute('href', mockedProps.permalink);
  });
});
