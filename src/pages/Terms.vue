<template>
  <q-page class="q-gutter q-pa-md">
    <cart-bottom v-if="cart.length"></cart-bottom>
    <q-card class="q-mt-lg" v-if="cart.length">
      <q-card-section class="q-pb-none">
        <div class="text-blue-5 q-pb-none">Accept out terms & conditions</div>
      </q-card-section>
      <q-card-section>
        <div id="termsScroller" class="q-pa-md" v-html="getpolicy"></div>
      </q-card-section>
    </q-card>
    <confirm-button :step="`terms`"></confirm-button>
  </q-page>
</template>
<script>
import CartItem from "components/CartItem";
import CartBottom from "components/CartBottom";
import NoResult from "components/NoResult";
import ConfirmButton from "components/cart/ConfirmButton";
import {mapGetters, mapState} from "vuex";

export default {
  components: {
    CartItem,
    CartBottom,
    NoResult,
    ConfirmButton
  },
  created() {
    this.$store.commit('general/HANDLE_CONFIRM', 'terms')
  },
  computed: {
    getPolicy() {
      return this.getOptionByKey('cancellation_policy') || 'Cancellation policy here'
    },
    ...mapState('general', ['cart']),
    ...mapGetters('general', ['getOptionByKey'])
  }
}
</script>

<style scoped>
#termsScroller {
  max-height: 160px;
  overflow: scroll;
  line-height: 24px;
}
</style>
