const withImages = require('next-images');

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
  }
};
