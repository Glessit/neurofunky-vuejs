import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'

import App from './App.vue'
import {router} from './router'
import {store} from './applicationStore'

/* UI */
import UIkit from '../node_modules/uikit/dist/js/uikit.js'
import UIKitIcon from '../node_modules/uikit/dist/js/uikit-icons.min'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueLocalStorage);


new Vue({
  localStorage: localStorage,
  router: router,
  store: store,
  el: '#app',
  render: h => h(App)
});
