
const course = {
  namespaced: true,
  state: {
    time: '请选择预约时间',
    serviceStore: '请选择服务门店',
    servicePerson: '请选择服务人员'

  },
  mutations: {
    // TOGGLE_SIDEBAR: state => {
    //   if (state.sidebar.opened) {
    //     Cookies.set('sidebarStatus', 1)
    //   } else {
    //     Cookies.set('sidebarStatus', 0)
    //   }
    //   state.sidebar.opened = !state.sidebar.opened
    //   state.sidebar.withoutAnimation = false
    // },
    // CLOSE_SIDEBAR: (state, withoutAnimation) => {
    //   Cookies.set('sidebarStatus', 1)
    //   state.sidebar.opened = false
    //   state.sidebar.withoutAnimation = withoutAnimation
    // },
    updateTime: (state, time) => {
      state.time = time
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
