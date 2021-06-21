import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reddit.com/r/meme/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
});

export const fetcher = (url) =>
  api
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log('error', err.message));
