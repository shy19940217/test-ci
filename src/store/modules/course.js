// import { debug } from 'util'

const course = {
  namespaced: true,
  state: {
    time: '请选择预约时间',
    serviceStore: '请选择服务门店',
    servicePerson: '请选择服务人员',
    serviceProject: '请选择服务项目',
    chooseDateObj: {
      active: null,
      name: '',
      time: ''
    },
    choosePersonObj: {
      active: null,
      name: ''
    },
    chooseStoreObj: {
      active: null,
      name: ''
    },
    chooseProjectObj: {
      active: null,
      name: '请选择服务项目'
    }
  },
  mutations: {
    updateChooseDateObj: (state, data) => {
      state.chooseDateObj = data
    },
    updatechoosePersonObj: (state, data) => {
      state.choosePersonObj = data
    },
    updatechooseStoreObj: (state, data) => {
      state.chooseStoreObj = data
    },
    updateChooseProjectObj: (state, data) => {
      state.chooseProjectObj = data
    },
    updateTime: (state, time) => {
      state.time = time
    },
    updateServiceProject: (state, data) => {
      state.serviceProject = data
    },
    updateServicePerson: (state, data) => {
      state.servicePerson = data
    },
    updateServiceStore: (state, data) => {
      state.serviceStore = data
    }

  },
  actions: {
    // ToggleSideBar: ({ commit }) => {
    //   commit('TOGGLE_SIDEBAR')
    // },
    // CloseSideBar ({ commit }, { withoutAnimation }) {
    //   commit('CLOSE_SIDEBAR', withoutAnimation)
    // },
    // ToggleDevice ({ commit }, device) {
    //   commit('TOGGLE_DEVICE', device)
    // }
  }
}

export default course
