<template>
  <q-page class="q-gutter q-pa-md">
    <cart-item v-for="(item, index) in cart" :key="index" :item="item" :index="index"></cart-item>
    <cart-bottom v-if="cart.length"></cart-bottom>
    <no-result v-else></no-result>
    <confirm-button :step="`terms`"></confirm-button>
  </q-page>
</template>
<script>
import CartItem from "components/CartItem";
import CartBottom from "components/CartBottom";
import NoResult from "components/NoResult";
import ConfirmButton from "components/cart/ConfirmButton";
import {mapState} from "vuex";

export default {
  components: {
    CartItem,
    CartBottom,
    NoResult,
    ConfirmButton
  },
  computed: {
    ...mapState('general', ['cart'])
  }
}
</script>
