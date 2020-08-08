const path = require('path')
const rootPath = path.resolve(__dirname, '../src/')

module.exports = async ({ config }) => {
  mode = "development";

  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src')
  }

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias
      }
    },
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.ts$/,
    resourceQuery: /components/,
    loaders: [
      {
        loader: 'vue-docgen-loader',
        options: { parser: 'typescript' },
      }
    ],
    enforce: 'post'
  })

  config.module.rules.push({
    test: /\.stories\.ts$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.(png|jpg|otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader',
  });

  config.module.rules.push({
    test: /\.css/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { url: false } },
    ],
  });

  config.module.rules.push({
    test: /\.ts/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
  });

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
      },
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/scss/app.scss'),
          ],
        }
      }
    ]
  });

  config.resolve.extensions = ['.ts', '.js', '.vue']
  config.resolve.alias['~'] = rootPath
  config.resolve.alias['@'] = rootPath

  return config;
}
