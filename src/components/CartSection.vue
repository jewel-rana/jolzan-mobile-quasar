<template>
  <div>
    <div id="cartSection">
      <q-btn color="primary" class="full-width" @click="displayCartContent">Cart ({{ cart.length }})</q-btn>
      <div id="cartContent" v-if="cartContent">
        <q-list bordered separator v-if="cart.length">
          <cart-item v-for="(item, index) in cart" :item="item" :index="index"></cart-item>
        </q-list>
        <no-result v-else :msg="`No cart items found`"></no-result>
        <div class="row justify-center">
          <q-btn
            v-if="cart.length"
            type="submit"
            :loading="submitting"
            class="full-width"
            color="teal"
            @click="confirmCart($event)"
          >Confirm order ({{ cartTotal }})
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import {mapState, mapGetters} from "vuex";
import NoResult from "components/NoResult";
import CartItem from "components/CartItem";

export default {
  components: {NoResult, CartItem},
  setup() {
    return {
      cartContent: ref(false)
    }
  },
  created() {
    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
      this.$store.commit("general/LOAD_CART_ITEMS", JSON.parse(cartItems))
    }
  },
  methods: {
    displayCartContent() {
      this.cartContent = !this.cartContent
      console.log(this.cartContent)
    },
    confirmCart(event) {
      // this.$root.$emit("bv::show::modal", "order-confirm");
      // this.$store.commit('general/CHECKOUT_INITIATE')
      this.$router.push('/cart')
    },
    changeBoardingPoint(event, index) {
      this.$store.dispatch("changeBoardingPoint", {id: event.target.value, index: index})
    }
  },
  computed: {
    vatOption() {
      return parseInt(this.getOptionByKey('vat_amount'))
    },
    cartTotal() {
      let total = 0.00;
      for (var i = 0; i < this.cart.length; i++) {
        total += this.cart[i].fare
        if (this.cart[i].vat_applicable_to === 'customer') {
          total += this.cart[i].fare * (this.cart[i].vat_amount / 100)
        }
      }
      return total.toFixed(2)
    },
    ...mapState('general', ['cart', 'customer_token']),
    ...mapGetters(['getOptionByKey'])
  }
}
</script>
<style scoped>
#cartSection {
  position: fixed;
  bottom: 56px;
  left: 0;
  right: 0;
  top: auto;
  height: auto;
  background: #ffffff;
}
</style>
