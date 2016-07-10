const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: './dist',
    filename: 'main.js',
    libraryTarget: 'umd',
    library: 'shoebox',
  },
  externals: {
    'angular': 'angular',
    'angular-cookies': 'angular-cookies',
    'angular-bootstrap': 'angular-bootstrap',
    'angular-messages': 'angular-messages',
    'angular-ui-router': 'angular-ui-router',
    '_': '_'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'public/js',
        from: '**/*.html' 
      },
      {
        from: 'public/css',
        to: 'css'
      },
      {
        from: 'public/fonts',
        to: 'fonts'
      }
    ])
  ]
};