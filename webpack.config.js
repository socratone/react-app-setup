const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // 배열의 순서대로 적용된다.
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/, // jsx만 컴파일한다.
      },
    ],
  },
};
