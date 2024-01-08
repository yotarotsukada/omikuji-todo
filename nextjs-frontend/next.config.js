const withLitSSR = require("@lit-labs/nextjs")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your own config here
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/todo',
        permanent: true,
      },
    ]
  },
  
  // @see https://github.com/uhyo/nitrogql/blob/master/examples/nextjs/next.config.js
  webpack(config) {
    config.module.rules.push({
      test: /\.graphql$/,
      loader: "@nitrogql/graphql-loader",
      options: {
        configFile: "./graphql.config.yaml",
      },
    });
    return config;
  },
};

module.exports = withLitSSR(nextConfig);
