import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/assets/scss/app.scss'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const readFiles = [
  require.context('../src/components/atoms', true, /stories.ts$/),
  require.context('../src/components/molecules', true, /stories.ts$/),
  require.context('../src/components/organisms', true, /stories.ts$/),
];

function loadStories() {
  readFiles.forEach((file) => {
    file.keys().forEach((filename) => file(filename));
  });
}

configure(loadStories, module)

// addon
addDecorator(withKnobs)

// viewport 端末設定
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
