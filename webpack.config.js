module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname,
    filename: '/src/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
};
