module.exports = {
  stories: ['../src/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-knobs',
    '@storybook/preset-typescript',
    'storybook-addon-vue-info/lib/register'
  ],
};
