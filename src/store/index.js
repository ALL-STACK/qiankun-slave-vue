import Vue from "vue";
import Vuex from "vuex";
import login from "../models/login";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state, { payload }) {
      console.log(payload)
      state.count ++;
    }
  },
  actions: {},
  modules: {
    login
  }
});
