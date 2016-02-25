var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

const PATHS = {
  build: path.join(__dirname, 'public'),
  client: path.join(__dirname, 'src', 'client'),
  server: path.join(__dirname, 'src', 'server'),
  test: path.join(__dirname, 'test')
}

// Transpiles ES6+
const JSX_LOADER = {
  test: /\.jsx?$/,
  include: [PATHS.client, PATHS.server],
  loader: 'babel',
  query: {
    presets: ['es2015', 'react', 'stage-1']
  }
}

// Lets me import and ultimately bundle my css up
const CSS_LOADER = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
}

module.exports = {
  devtool: 'eval',  // Helpful for debugging
  entry: path.join(PATHS.client, 'index.js'),
  output: {
    path: PATHS.build,
    filename: "bundle.js"
  },
  resolve: {
    // Automagically figure out the extension in import statements
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [JSX_LOADER, CSS_LOADER]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true })
  ]
};
