<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator v-if="cart.length">
        <cart-item v-for="(item, index) in cart" :item="item" :index="index"></cart-item>
      </q-list>
      <div class="orderBottomBox q-mt-lg">
        <cart-bottom v-if="cart.length"></cart-bottom>
        <no-result :msg="`No items found, please add some ticket`" v-else></no-result>
        <confirm-button class="q-mt-lg" :step="`passenger`"></confirm-button>
      </div>
    </div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";
import CartItem from "components/cartItem";
import CartBottom from "components/CartBottom";
import NoResult from "components/NoResult";
import ConfirmButton from "components/cart/ConfirmButton"

export default {
  components: {
    NoResult,
    CartItem,
    CartBottom,
    ConfirmButton
  },
  computed: {
    ...mapState('general', ['cart'])
  }
}
</script>
