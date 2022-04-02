<template>
  <router-view/>
  <login-form></login-form>
</template>
<script>
import {defineComponent} from 'vue';
import {mapState, mapGetters, mapActions} from 'vuex';
import {QSpinnerFacebook, useQuasar} from 'quasar'
import LoginForm from "components/LoginForm.vue"

export default defineComponent({
  name: 'App',
  components: {
    LoginForm
  },
  setup() {
    const $q = useQuasar()
  },
  created() {
    this.$store.dispatch('general/initSite')
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('general/SET_USER_DATA', {
        token: JSON.parse(localStorage.getItem('token')),
        user: userData,
        success: true
      })
    }
    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
      this.$store.commit("general/LOAD_CART_ITEMS", JSON.parse(cartItems))
    }
  },
  methods: {
    notifyToast(type, msg) {
      this.$q.notify({
        type: type,
        message: msg
      })
    }
  },
  ...mapState('general', ['user', 'loggedIn', 'noticeCount', 'cart']),
  ...mapActions('general', ['initSite']),
  ...mapGetters('general', ['getOptionByKey'])
})
</script>
