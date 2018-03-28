import Cookies from 'js-cookie'

const user = {
  state: {},
  mutations: {
    logout (state, vm) {
      Cookies.remove('user')
      Cookies.remove('password')
      Cookies.remove('access')
    }
  }
}

export default user
