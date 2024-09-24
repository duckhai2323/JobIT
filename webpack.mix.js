const mix = require('laravel-mix');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzerConfig = require('./analyzer');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

mix.setPublicPath('public/build/');
mix.setResourceRoot('build/');

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.(s[ac]ss|css)$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', 
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', 
            }
          }
        ]
      }
    ],
  },
  output: {
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/build/', 
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: mix.inProduction() ? 'static' : 'server', 
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: process.env.APP_URL
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/assets'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
  }
});

if (mix.inProduction()) {
  mix.version();
}

mix.options({
  hmrOptions: {
    host: process.env.APP_DOMAIN,
    port:3000,
  },
});

// Định nghĩa các file đầu vào và đầu ra
mix
  .js('resources/assets/index.js', 'js/index.js') 
  .react() 
  .sass('resources/assets/styles/styles.scss', 'css/styles.css'); 