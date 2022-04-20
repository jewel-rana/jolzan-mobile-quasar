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
        <div class="col-5">:
          {{ booking.total_dues }}
          <q-btn class="q-mb-sm" size="sm" color="orange"
                 v-if="booking.total_dues > 0 "
            @click="gotToPayment(booking.pnr)">Pay now
          </q-btn>
        </div>
      </div>
    </div>

    <div class="text-teal-3 text-bold q-mt-lg">Tickets</div>
    <q-separator/>
    <div id="ticketItems">
      <fieldset v-for="(items, indx) in booking.items" :key="indx" class="q-mb-lg">
        <legend>{{ items.date }}</legend>
        <q-list>
          <ticket-item v-for="item in items.tickets" :item="item" :index="item.id"></ticket-item>
        </q-list>
      </fieldset>
    </div>
    <div id="bookingActions" v-if="booking.payment_status === 'success'">
      <q-btn-group spread>
        <q-btn color="primary" size="md" label="Download ticket" icon="download" @click="downloadInvoice(booking.pnr)"/>
      </q-btn-group>
    </div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";
import TicketItem from "components/TicketItem";
import Constants from "src/services/constants";
import Axios from"axios";

export default {
  components: {TicketItem},
  created() {
    if(!!this.booking) {
      this.$parent.$q.loading.show()
      this.$store.dispatch('general/bookingDetails', this.$route.params.id)
        .then(() => {
          this.$parent.$q.loading.hide()
          if(this.$route.query.payment !== null && this.$route.query.payment == 'success') {
            this.$parent.$q.notify({type: 'positive', message: 'Your payment success'})
          }
        })
    }
  },
  mounted(){
    // alert('ok')
  },
  methods: {
    gotToPayment(pnr) {
      window.location.href = Constants.BACKEND_URL + '/checkout/paynow/' + pnr
    },
    downloadInvoice(pnr) {
      window.location.href = Constants.BACKEND_URL +'/download/' + pnr
    }
  },
  computed: {
    ...mapState('general', ['booking'])
  }
}
</script>
