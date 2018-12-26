const path = require("path");
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/HebrewWork' : '',
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["reduxStore"] = path.join(__dirname, "reduxStore");
    config.resolve.alias["lib"] = path.join(__dirname, "lib");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");
    return config;
  }
});
