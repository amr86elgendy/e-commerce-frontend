const { i18n } = require('./next-i18next.config.js');

module.exports = () => {
  return {
    reactStrictMode: true,
    images: {
      domains: ['elgendy-ecommerce.herokuapp.com'],
    },
    i18n,
  };
};
