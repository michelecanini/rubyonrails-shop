/** @type {import('next').NextConfig} */
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

const from = "node_modules/bootstrap-italia/dist/";
const to = path.join(__dirname, "./public/bootstrap-italia/dist");

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [{ from, to }]
        })
      );
    }
    // homepage
    config.resolve.alias['pages/index'] = path.join(__dirname, 'app/page');
    // pages
    config.resolve.alias['pages'] = path.join(__dirname, 'app');
    return config;
  },
}
