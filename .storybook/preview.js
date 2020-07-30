import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { DocsPage } from '@storybook/addon-docs/blocks'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.ts$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
addDecorator(withKnobs)
addDecorator(withInfo)

// viewport 端末設定
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
