import Vue from "vue";
import Vuex from "vuex";
import Portfolio from './portfolio';
import Stocks from './stocks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    portfolio: Portfolio,
    stocks: Stocks,
  },
});
