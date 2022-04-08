<template>
  <div class="q-mt-lg">
    <div class="justify-center vertical-middle">
      <q-btn color="primary" class="full-width" @click="handleConfirm($event, step)" v-if="cart.length">Confirm</q-btn>
      <q-btn color="primary" class="absolute-center" @click="gotToBooking" v-else>Go to Booking</q-btn>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: ['step'],
  methods: {
    gotToBooking(){
      this.$router.push('/booking')
    },
    handleConfirm(e, step) {
      if (this.cart.length === 0) {
        this.$store.commit('general/CLEAR_STEP')
        this.$router.push('/booking')
      } else {
        switch (this.order.step) {
          case 'cart':
            this.$parent.$q.loading.show()
            this.$store.commit('general/HANDLE_CONFIRM', 'passenger')
            this.$router.push('/passenger')
            this.$parent.$q.loading.hide()
            break;
          case 'passenger':
            this.$store.commit('general/HANDLE_CONFIRM', 'terms')
            this.$router.push('/terms')
            break;
          case 'terms':
            console.log(JSON.stringify(this.cart))
            this.$parent.$q.loading.show()
            this.$store.dispatch('general/orderConfirm')
              .then((response) => {
                this.$parent.$q.loading.hide()
                if(this.order.id) {
                  this.$router.push('/payment')
                }
              })
            break;
        }
      }
    }
  },
  computed: {
    ...mapState('general', ['order', 'cart', 'loggedIn'])
  }
}
</script>
