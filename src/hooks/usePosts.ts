import useSWR, { useSWRInfinite } from 'swr';
import { IPost } from '../components/PostsList/PostItem';
import { api } from '../services/api';

function getUrl(data, index) {
  const posts = data ? [].concat(...data) : [];
  const lastItemName = posts?.length ? posts[posts.length - 1].name : '';

  if (lastItemName) {
    return `top.json?after=${lastItemName}&count=${
      index && (index + 1) * 5
    }&limit=5&raw_json=1`;
  }

  return 'top.json?limit=5';
}

export function usePosts<Data = any, Error = any>(url: string) {
  const { data, error, size, setSize, mutate } = useSWRInfinite<Data>(
    (index: number, previousPageData: Data) => getUrl(previousPageData, index),
    async (fetchUrl: string) => {
      const response = await api.get(fetchUrl);

      const resData = response.data?.data?.children.map(
        ({ data: apiData }) => apiData as IPost
      );

      return resData ?? ([] as IPost[]);
    },
    {
      refreshInterval: 120000
    }
  );

  const isLoadingInitialData = !data && !error;

  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');

  return {
    data: data || [],
    error,
    isLoadingMore,
    isLoadingInitialData,
    loadMore: () => {
      setSize(size + 1);
    },
    mutate
  };
}
