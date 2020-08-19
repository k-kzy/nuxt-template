module.exports = {
  stories: ['../src/components/**/stories.ts'],
  addons: [
    // 'storybook-addon-vue-info/lib/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/preset-typescript',
    // '@storybook/addon-storysource/register',
    // '@storybook/addon-notes/register',
    // '@storybook/addon-links',
    // 'storybook-addon-vue-info/lib/register'
  ],
};
