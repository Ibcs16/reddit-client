const { i18n } = require('./next-i18next.config');

const allowedDomains = [
  'a.thumbs.redditmedia.com',
  'b.thumbs.redditmedia.com',
  'images.example.com',
  'i.redd.it',
  'www.pbs.org'
];

module.exports = {
  reactStrictMode: true,
  images: {
    esModule: true,
    __esModule: true,
    domains: allowedDomains
  },
  i18n
};
