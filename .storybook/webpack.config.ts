const path = require('path')
// const rootPath = path.resolve(__dirname, '../src/')

module.exports = ( { config } : any ) => {
  // addon-storysource 設定
  config.module.rules.push({
    test: /stories.ts?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  })

  // addon-vue-info 設定
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
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

  // .scss 設定
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.resolve(__dirname, '../src/assets/scss/app.scss')],
        }
      }
    ]
  })

  // 画像ファイル、svg ファイルを DataUrl 形式に変換
  // config.module.rules.push({
  //   test: /\.(png|jpg|otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
  //   use: {
  //     loader: 'url-loader',
  //   }
  // })

  // config.module.rules.push({
  //   test: /\.(png|svg|jpg|gif)$/,
  //   use: {
  //     loader: 'file-loader',
  //   }
  // })

  // config.resolve.alias['@'] = rootPath
  // config.resolve.alias['~'] = rootPath

  return config
}
