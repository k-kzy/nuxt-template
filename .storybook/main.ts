module.exports = {
  stories: ['../src/components/**/**/stories.ts'],
  addons: [,
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/preset-typescript',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
  ],
};
