<template>
  <div class="q-mt-lg">
    <div class="justify-center vertical-middle">
      <q-btn color="primary" class="full-width" @click="handleConfirm($event, step)">Confirm</q-btn>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: ['step'],
  methods: {
    handleConfirm(e, step) {
      if(this.cart.length === 0) {
        this.$store.commit('general/CLEAR_STEP')
        this.$router.push('/booking')
      } else {
        this.$store.commit('general/HANDLE_CONFIRM')
        if(this.loggedIn) {
          console.log(this.order)
          this.$router.push('/' + this.order.step)
        }
      }
    }
  },
  computed: {
    ...mapState('general', ['order', 'cart', 'loggedIn'])
  }
}
</script>
