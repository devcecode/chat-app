import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const javascriptRules = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-react']
  }
}

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const rules = [ javascriptRules, cssRules ]

export default {
  output: {
    filename: 'main.js',
    path: `${path.resolve()}/build`
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  devServer: { port: 3000 }
}