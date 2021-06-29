const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });

    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }

    config.plugins.push(new DuplicatePackageCheckerPlugin());
    config.resolve.alias["fast-deep-equal"] = path.resolve(
      __dirname,
      "node_modules",
      "fast-deep-equal"
    );

    return config;
  },
};
