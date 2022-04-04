<template>
  <q-page>
    <div class="absolute-center">
      <div class="text-teal text-h6">Your booking success, please confirm payment within 30 minutes</div>
      <q-btn class="full-width bg-primary text-white q-mt-lg" @click="goToPayment">Pay now</q-btn>
    </div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";
import Constants from "src/services/constants";

export default {
  created() {
    if(!this.order.id) {
      this.$router.push('/cart')
    } else {
      this.$parent.$q.notify({
        type: this.alert.success ? 'positive' : 'negative',
        message: this.alert.message
      })
    }

  },
  methods: {
    goToPayment() {
      console.log(this.order)
      window.location.href = Constants.BACKEND_URL + "/checkout/paynow/" + this.order.id
    }
  },
  computed: {
    ...mapState('general', ['order', 'alert'])
  }
}
</script>
