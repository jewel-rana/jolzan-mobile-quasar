<template>
  <div>
    <div id="cartSection" :class="cartSectionDeviceClass">
      <div class="cartPopup cursor-pointer" clickable  @click="displayCartContent">
        <q-icon name="expand_less" size="32px" v-if="!cartContent"></q-icon>
        <q-icon name="keyboard_arrow_down" size="32px" v-else></q-icon>
      </div>
      <q-btn flat color="primary" size="md" id="cartExpandButton" icon="shopping_cart" class="full-width" @click="displayCartContent">Cart ({{ cart.length }})</q-btn>
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
            class="q-ma-md"
            color="primary"
            size="md"
            @click="confirmCart($event)"
          >Checkout
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
  created() {
    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
      this.$store.commit("general/LOAD_CART_ITEMS", JSON.parse(cartItems))
    }
  },
  methods: {
    displayCartContent() {
      this.$store.commit('general/DISPLAY_CART_CONTENT', !this.cartContent)
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
    cartSectionDeviceClass() {
      return  this.$q.screen.lt.md  ? 'cartSectionMobile' : 'cartSectionDeskTop'
    },
    ...mapState('general', ['cart', 'customer_token', 'cartContent']),
    ...mapGetters(['getOptionByKey'])
  }
}
</script>
<style scoped>
.cartPopup {
  width: 54px;
  padding: 0 12px;
  margin: -32px 0 0 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #1976d2;
  color: #fff;
}
#cartExpandButton {
}
#cartSection {
  position: fixed;
  left: auto;
  right: 0;
  top: auto;
  height: auto;
  border-top: 3px solid #1976d2;
  background: #ffffff;
  z-index: 1001;
}
.cartSectionMobile {
  left: 0;
  width: 100%;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  bottom: 56px;
}
.cartSectionDeskTop {
  border-top-left-radius: 15px;
  min-width: 460px;
  max-width: 560px;
  border-left: 3px solid #1976d2;
}
</style>
