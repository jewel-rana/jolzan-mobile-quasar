<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator v-if="cart.length">
        <cart-item v-for="(item, index) in cart" :item="item" :index="index"></cart-item>
      </q-list>
      <div class="orderBottomBox">
        <cart-bottom></cart-bottom>
      </div>
    </div>
  </q-page>
</template>

<script>
import CartItem from "components/cartItem";
import {mapState} from "vuex";
import CartBottom from "components/CartBottom";

export default {
  components: {
    CartItem: CartItem,
    CartBottom: CartBottom
  },
  computed: {
    ...mapState('general', ['cart'])
  }
}
</script>
