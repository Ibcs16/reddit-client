// Using render and screen from test-utils.js instead of
// @testing-library/react
/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@utils/test-utils';
import PostItem from '@components/PostsList/PostItem';
import getTimeFromNow from '@utils/getTimeFromNow';
import userEvent from '@testing-library/user-event';

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

const mockedOnClick = jest.fn();

describe('PostItem', () => {
  it('should render post item elements', () => {
    render(
      <PostItem
        markAsReadPost={() => {}}
        handleDismissPost={() => {}}
        onClick={mockedOnClick}
        data={mockedProps}
      />
    );

    const subredditElement = screen.getByText('r/subreddit');
    const fromMockedDate = getTimeFromNow(mockedProps.created_utc);
    const postedByElement = screen.getByText(`Posted by author`);
    const postedDateElement = screen.getByText(fromMockedDate);
    const commentsElement = screen.getByText('2 comments');

    const postItemElements = [
      subredditElement,
      postedByElement,
      commentsElement,
      postedDateElement
    ];

    postItemElements.forEach((element) => expect(element).toBeInTheDocument());
    expect(commentsElement).toHaveAttribute('href', mockedProps.permalink);
  });

  it('should handle onClick with provided function', () => {
    render(
      <PostItem
        markAsReadPost={() => {}}
        handleDismissPost={() => {}}
        onClick={mockedOnClick}
        data={mockedProps}
      />
    );
    const postHeaderElement = screen.getByTestId('header');
    userEvent.click(postHeaderElement);
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
});
