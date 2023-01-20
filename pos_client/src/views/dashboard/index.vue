<template>
  <div class="dashboard-container">
    <h3>user id: {{ userInfo.userid }}</h3>
    <h3>user name: {{ userInfo.username }}</h3>
    <h3>user password: {{ userInfo.password }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
  name: 'Dashboard',
  data() {
    return {
      serverUrl: process.env.VUE_APP_SERVER,
      postBody: {
        'email': 'admin@admin.com',
        'password': '12345678'
      },
      userInfo: store.getters.curUserInfo.user
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    console.log('server', this.serverUrl)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
