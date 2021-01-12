// import path from 'path';
const path = require('path');

const config = {
  entry: './src/App.jsx',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ],
      }
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    compress: true,
    watchContentBase: true,
  }
}

// export default config;
module.exports = config;
