<template>
  <q-page class="q-pa-md">
    <div class="text-teal-3 text-bold">Booking Info</div>
    <q-separator/>
    <div id="bookingInfo">
      <div class="row">
        <div class="col-7">PNR Number</div>
        <div class="col-5">: {{ booking.pnr }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Booking date</div>
        <div class="col-5">: {{ booking.booking_date }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Booking Status</div>
        <div class="col-5">: {{ booking.status }}</div>
      </div>
    </div>

    <div class="text-teal-3 text-bold q-mt-lg">Payment Info</div>
    <q-separator/>
    <div id="paymentInfo">
      <div class="row">
        <div class="col-7">Ticket fees</div>
        <div class="col-5">: {{ booking.total_amount }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Vat</div>
        <div class="col-5">: {{ booking.vat_total }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Service charge</div>
        <div class="col-5">: {{ booking.charge_total }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Discount</div>
        <div class="col-5">: {{ booking.total_discount }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Gross total</div>
        <div class="col-5">: {{ booking.total_payable }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-7">Dues</div>
        <div class="col-5">: {{ booking.total_dues > 0 || booking.payment_status === 'pending' ? booking.total_payable : booking.dues }} <q-btn class="q-mb-sm" size="sm" color="orange" v-if="booking.total_dues > 0 || booking.payment_status === 'pending'">Pay now</q-btn></div>
      </div>
    </div>

    <div class="text-teal-3 text-bold q-mt-lg">Tickets</div>
    <q-separator/>
    <div id="ticketItems">
      <q-list>
        <cart-item v-for="item in booking.items" :item="item" :index="item.id"></cart-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";
import CartItem from "components/CartItem";

export default {
  components: {CartItem},
  created() {
    if(!!this.booking) {
      this.$parent.$q.loading.show()
      this.$store.dispatch('general/bookingDetails', this.$route.params.id)
      .then(() => {
        this.$parent.$q.loading.hide()
      })
    }
  },
  computed: {
    ...mapState('general', ['booking'])
  }
}
</script>
