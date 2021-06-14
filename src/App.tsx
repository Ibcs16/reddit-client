import { ThemeProvider } from "@emotion/react";
import redditMockedData from "./assets/reddit_mock.json";
import { GlobalStyles } from "./styles/Global";
import { defaultTheme } from "./styles/themes";
import getTimeFromNow from "./utils/getTimeFromNow";

interface IPost {
  data: {
    title: string;
    created_utc: number;
    author: string;
    thumbnail?: string;
    num_comments: number;
    read?: boolean;
  };
}

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>App working 🚀</h1>
      <br />
      <ul>
        {redditMockedData.map((item: IPost) => (
          <li
            style={{
              marginBottom: 10,
            }}
          >
            <div>
              <span>{item.data.author}</span> {" - "}
              <span>{!item.data.read ? "New" : "Read"}</span> {" - "}
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
    </ThemeProvider>
  );
};

export default App;
