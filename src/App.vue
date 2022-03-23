<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import {mapState, mapGetters, mapActions} from 'vuex';
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
  ...mapState('general', ['user', 'loggedIn', 'noticeCount', 'cart']),
  ...mapActions('general', ['initSite']),
  ...mapGetters('general', ['getOptionByKey'])
})
</script>
