import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
