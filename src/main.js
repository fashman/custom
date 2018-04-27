import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
// import FastClick from 'fastclick';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

// FastClick.attach(document.body);