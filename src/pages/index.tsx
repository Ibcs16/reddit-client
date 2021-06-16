import Head from 'next/head';
import getTimeFromNow from '../utils/getTimeFromNow';
import redditMockedData from '../assets/reddit_mock.json';

interface IPost {
  data: {
    id: string;
    title: string;
    created_utc: number;
    author: string;
    thumbnail?: string;
    num_comments: number;
    read?: boolean;
  };
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reddit Client</title>

        <meta name="description" content="A more elegant RedditClient" />
      </Head>

      <main>
        <h1>App working 🚀</h1>
        <br />
        <ul>
          {redditMockedData.map((item: IPost) => (
            <li
              key={`post-${item.data.id}`}
              style={{
                marginBottom: 10
              }}
            >
              <div>
                <span>{item.data.author}</span> {' - '}
                <span>{!item.data.read ? 'New' : 'Read'}</span> {' - '}
                <span>{getTimeFromNow(item.data.created_utc)}</span>
              </div>
              <div>
                <h3>{item.data.title}</h3>
              </div>
              <div>
                <span>{item.data.num_comments} comments</span>
              </div>

              {/* <span>{new Date(item.data.created_utc)}</span> */}
            </li>
          ))}
        </ul>
        <h1>App running 🚀</h1>
      </main>
    </div>
  );
}
