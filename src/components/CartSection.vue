<template>
  <div>
    <div id="cartSection">
      <q-btn color="primary" class="full-width" @click="displayCartContent">Cart ({{ cart.length }})</q-btn>
      <div id="cartContent" v-if="cartContent">
        <q-list bordered separator v-if="cart.length">
          <q-item v-for="(c, index) in cart" :key="c.item_id">
            <q-item-section avatar top>
              <q-icon v-if="c.type === 'cabin'" name="bed" color="black" size="34px"/>
              <q-icon v-if="c.type === 'seat'" name="chair" color="black" size="34px"/>
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{ c.vehicle_name }} </span>
                <span class="text-grey-8"> {{ c.route_name }}</span>
              </q-item-label>
              <q-item-label lines="1">{{ c.cabin_no}}</q-item-label>
            </q-item-section>

            <q-item-section top class="col-2">
              <q-item-label>{{ c.fare }}/-</q-item-label>
            </q-item-section>

            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn size="12px" flat dense round icon="delete"
                       @click="removeCartItem(index)"/>
              </div>
            </q-item-section>
          </q-item>
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

export default {
  components: {NoResult},
  setup (){
    return {
      cartContent: ref(false)
    }
  },
  created() {
    const results = localStorage.getItem('search_results');
    if (results) {
      // console.log(results)
      this.$store.commit('SEARCH_RESULTS', JSON.parse(results))
    }
    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
      this.$store.commit("LOAD_CART_ITEMS", JSON.parse(cartItems))
    }
  },
  methods: {
    displayCartContent(){
      this.cartContent = !this.cartContent
      console.log(this.cartContent)
    },
    removeCartItem(index) {
      const item = this.cart[index]
      this.$store.dispatch("general/removeItemFromCart", {item: item, index: index, token: this.customer_token})
        .then(() => {
          if( !this.cart ) {
          }
        })
        .catch(error => {
        })
    },
    confirmCart(event) {
      // this.$root.$emit("bv::show::modal", "order-confirm");
      this.$store.commit('general/CHECKOUT_INITIATE')
    },
    changeBoardingPoint( event, index ) {
      this.$store.dispatch("changeBoardingPoint", {id: event.target.value, index: index})
    }
  },
  computed: {
    ...mapState('general', ['cart', 'customer_token']),
    ...mapGetters(['getOptionByKey']),
    vatOption() {
      return parseInt( this.getOptionByKey('vat_amount') )
    },
    cartTotal() {
      let total = 0.00;
      for (var i = 0; i < this.cart.length; i++) {
        total += this.cart[i].fare
        if( this.cart[i].vat_applicable_to === 'customer' ) {
            total += this.cart[i].fare * ( this.cart[i].vat_amount/100)
        }
      }
      return total.toFixed(2)
    }
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
