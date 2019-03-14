import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import course from './modules/course'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app: app,
    course: course
  },
  getters
})

export default store
