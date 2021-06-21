import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://reddit.com/',
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
