import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Decorator from './Decorator.vue'
import '../src/assets/scss/app.scss'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

addDecorator(() => ({
  components: { Decorator },
  template: `<decorator>
      <story slot="story"></story>
    </decorator>`,
}));

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
addDecorator(withInfo)

// viewport 端末設定
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
