import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    count(state, getter, rootState, rootGetter) {
      return state.count;
    }
  }
});

export default store;
