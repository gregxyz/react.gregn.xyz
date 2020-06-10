const Dotenv = require('dotenv-webpack');
const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
  webpack(config) {
    config.plugins.push(new Dotenv({
      systemvars: true,
    }));
    return config;
  },
});
