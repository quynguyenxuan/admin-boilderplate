const { useBabelRc, addWebpackPlugin, addWebpackAlias, override } = require("customize-cra");
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require("terser-webpack-plugin");

console.log('appMode', process.env.APP_MODE)
module.exports = override(
  useBabelRc(), 
  addWebpackPlugin(
    new Dotenv({
      path: `./.env.${process.env.APP_MODE}`,
    }),
    new TerserPlugin({
      terserOptions: {
        mangle: {
          safari10: true,
        },
        keep_classnames: true,
        keep_fnames: true,
      },
    })
  ),
  addWebpackAlias({
    'react-dom$': 'react-dom/profiling',
    'scheduler/tracing': 'scheduler/tracing-profiling',
  }),
);
