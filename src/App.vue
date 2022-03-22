<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import {mapState, mapGetters} from 'vuex';
export default defineComponent({
  name: 'App',
  created() {
    this.$store.dispatch('initSite')
    const userString = localStorage.getItem('user')
    if( userString ) {
      const userData = JSON.parse( userString )
      this.$store.commit('SET_USER_DATA', {token: JSON.parse( localStorage.getItem('token') ), user: userData, success: true })
    }
  },
  ...mapState(['user', 'loggedin', 'searchForm', 'noticeCount', 'cart']),
  ...mapGetters(['getOptionByKey'])
})
</script>
