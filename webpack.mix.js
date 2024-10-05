const mix = require('laravel-mix');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

mix.setPublicPath('public/build/');
mix.setResourceRoot('build/');

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name].[ext]',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
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
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/assets'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
});

if (mix.inProduction()) {
  mix.version();
}

mix.options({
  hmrOptions: {
    host: process.env.APP_DOMAIN,
    port: 8080,
  },
});

if (!mix.inProduction()) {
  mix.browserSync({
    proxy: process.env.APP_URL,
    host: 'localhost',
    port: 3000,
    open: true,
    files: ['resources/views/**/*.blade.php', 'public/build/js/**/*.js', 'public/build/css/**/*.css'],
  });
}

mix
  .js('resources/assets/index.js', 'public/build/js/index.js')
  .react()
  .sass('resources/assets/styles/styles.scss', 'public/build/css/styles.css');
