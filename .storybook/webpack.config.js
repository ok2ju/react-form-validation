const path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', 'json', '.scss'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../examples")
        ]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass'
        ],
        include: [
          path.resolve(__dirname, '../src')
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
