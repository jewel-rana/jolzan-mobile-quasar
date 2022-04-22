<template>
  <q-page>
    <div class="absolute-center">
      <div class="text-teal text-h6">Your booking success, please confirm payment within 30 minutes</div>
      <q-btn id="payNowButton" class="full-width bg-primary text-white q-mt-lg" :class="disabled" @click="goToPayment">Pay now</q-btn>
    </div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";
import Constants from "src/services/constants";
import {ref} from "vue";

export default {
  setup() {
    return {
      disabled: ref('active')
    }
  },
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
      this.disabled = 'disable'
      console.log(this.order)
      this.$parent.$q.loading.show
      window.location.href = Constants.BACKEND_URL + "/checkout/paynow/" + this.order.id
    }
  },
  computed: {
    ...mapState('general', ['order', 'alert'])
  }
}
</script>

<style lang="scss" scoped>
#payNowButton.disable {
  background-color: $accent;
}
</style>
