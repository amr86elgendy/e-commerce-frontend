const nextTranslate = require('next-translate');

module.exports = () => {
  return {
    ...nextTranslate(),
    reactStrictMode: true,
    images: {
      domains: ['elgendy-ecommerce.herokuapp.com'],
    },
  };
};
