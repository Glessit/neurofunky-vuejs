import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'

import App from './App.vue'
import {router} from './router'
import {store} from './applicationStore'

/* UI */
import UIKit from 'uikit'
import UIKitIcon from '../node_modules/uikit/dist/js/uikit-icons.min'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueLocalStorage);

// if localStorage has authToken key and headers hasn't X-NFK-AUTH key -> set it
if (Vue.localStorage.get('authToken') && !Vue.http.headers.common['X-NFK-AUTH']) {
  console.log('set auth. token ..');
  // Vue.http.headers.common['X-NFK-AUTH'] = Vue.localStorage.get('authToken')+'1';
  Vue.http.interceptors.push((request, next)  => {
    request.headers.set('X-NFK-AUTH', Vue.localStorage.get('authToken')+'1');
    next((response) => {

      if(response.status == 401 ) {
        // show error message
        auth.logout();
        router.go('/login?unauthorized=1');
      }
    });
  });
}

new Vue({
  localStorage: localStorage,
  router: router,
  store: store,
  el: '#app',
  render: h => h(App)
});
