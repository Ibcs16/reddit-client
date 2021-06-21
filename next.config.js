const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  images: {
    esModule: true,
    __esModule: true,
    domains: [
      'a.thumbs.redditmedia.com',
      'b.thumbs.redditmedia.com',
      'images.example.com'
    ]
  },
  i18n
};
