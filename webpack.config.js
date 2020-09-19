const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js', // import된 파일들도 불러온다.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    // 배열의 순서대로 적용된다.
    rules: [
      {
        test: /\.js$/, // .js 확장자로 끝나는 파일만 babel-loader를 사용한다.
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        // css-loader가 css를 가져온다.
        // style-loader가 html head에 style 태그를 넣어준다.
        use: ['style-loader', 'css-loader'],
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
