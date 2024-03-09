// next.config.js

const nextConfig = {};

module.exports = {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    // Add a rule to handle mp4 files
    config.module.rules.push({
      test: /\.(mp4)$/,
      type: 'asset/resource',
    });

    return config;
  },
};
