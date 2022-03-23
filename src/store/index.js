import Vue from 'vue'
import Vuex from 'vuex'
import SearchModule from '@/store/modules/search-module'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      SearchModule
    }
})

export default store