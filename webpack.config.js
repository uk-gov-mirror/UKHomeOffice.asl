const path = require('path');

module.exports = {
  entry: {
    places: './assets/js/pages/places.jsx',
    search: './assets/js/pages/search.jsx'
  },
  output: {
    path: path.resolve(__dirname, './public/js/pages')
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};