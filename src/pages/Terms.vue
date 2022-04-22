<template>
  <q-page class="q-gutter q-pa-md">
    <cart-bottom v-if="cart.length"></cart-bottom>
    <q-card class="q-mt-lg" v-if="cart.length">
      <q-card-section class="q-pb-none">
        <div class="text-blue-5 q-pb-none">Accept out terms & conditions</div>
        <div id="termsScroller" v-html="getOption('cancellation_policy')"></div>
      </q-card-section>
      <q-card-section>
        <q-checkbox keep-color v-model="accept" label="Accept" color="cyan" />
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
  methods: {
    getOption(key, default_val = '') {
      let options = this.siteData.options
      return options[key] || default_val;
    }
  },
  computed: {
    accept: {
      get(){
        return this.$store.state.general.order.terms_accept
      },
      set(value){
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'terms_accept', value: value})
      }
    },
    getPolicy() {
      return this.getOptionByKey('cancellation_policy') || 'Cancellation policy here'
    },
    ...mapState('general', ['cart', 'siteData']),
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
