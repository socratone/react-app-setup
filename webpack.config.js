const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js', // index.js부터 시작해서 여기에 import된 모든 파일들이 bundle.js에 담긴다.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // dist 폴더에 build된다.
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자로 끝나는 파일만 babel-loader를 사용한다.
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        // 먼저 css-loader가 css를 가져온다.
        // 다음으로 style-loader가 html head에 style 태그를 넣어준다.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // src/index.html 파일을 읽어서
      filename: 'index.html', // output으로 설정한 bundle.js를 추가하고 dist/index.html 파일을 만든다.
    }),
  ],
  devServer: {
    // 개발 서버를 띄우면 dist/index.html을 열고 index.html에서 불러오는 bundle.js를 임시로 컴파일 해준다.
    contentBase: path.join(__dirname, 'dist'), // dist의 index.html을 불러온다.
  },
};
