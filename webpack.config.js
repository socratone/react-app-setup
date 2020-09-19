const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // 배열의 순서대로 적용된다.
    rules: [
      {
        test: /\.js?$/, // js만 컴파일한다.
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    // 개발 서버를 띄울 때 어느 경로에 있는 것을 불러올 것인지
    contentBase: path.join(__dirname, 'public'),
    // 개발 서버에서 번들된 js파일을 어느 경로에서 불러올 것인지
    // 위와 같은 경로로 설정하면 충돌이 생기는 것 같다.
    publicPath: '/dist/',
  },
};
