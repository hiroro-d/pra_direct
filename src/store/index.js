import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'hey',
    counter: 0,
    cartItems: ['a', 'b', 'c', 'd']
  },
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    }
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 1000)
      
    }
  },
  modules: {
  }
})
