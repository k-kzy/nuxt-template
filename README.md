# Nuxt Template

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Design System
Atomic Design

## UI Component List
### Storybook（↓ `.storybook` 配下の設定ファイルについて）
参考：https://medium.com/storybookjs/declarative-storybook-configuration-49912f77b78
#### main.js
config.js、addons.js、presets.js の内容をまとめたもの。
#### preview.js
レンダリング制御用。
#### manager.js
アプリUI設定用。設定しないなら不要。

## Linter
- eslint
- stylelint（アルファベット順に css プロパティソート用）

## Formatter
- prettier

## Git Hook
- husky

## Testing FW
- Jest
