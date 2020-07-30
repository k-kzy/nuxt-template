module.exports = {
  stories: ['../src/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-notes',
    '@storybook/addon-knobs',
    'storybook-addon-vue-info/lib/register'
  ],
};
