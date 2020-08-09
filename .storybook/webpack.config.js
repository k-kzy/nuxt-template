const path = require('path')
const rootPath = path.resolve(__dirname, '../src/')

module.exports = async ({ config }) => {
  mode = 'development'

  config.module.rules.push({
    test: /\.md$/,
    loaders: [
      {
          loader: "html-loader"
      },
      {
          loader: "markdown-loader",
      }
    ]
  })

  // addon-storysource 設定
  config.module.rules.push({
    test: /\.stories\.ts?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  // addon-vue-info 設定
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  // 画像ファイル、svg ファイルを DataUrl 形式に変換
  config.module.rules.push({
    test: /\.(png|jpg|otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader',
  })

  // .ts 設定
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  })

  // scss 設定
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/scss/app.scss'),
          ],
        }
      }
    ]
  })

  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  return config
}
