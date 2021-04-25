import Vue from "vue";
import Vuex from "vuex";
import Portfolio from './portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    portfolio: Portfolio,
  },
});
