import store from '@/store'
export default {
  hello: 'hello',

  setUserInfo(data) {

    store.dispatch('user/setCurUserInfo', data)
  }
}
