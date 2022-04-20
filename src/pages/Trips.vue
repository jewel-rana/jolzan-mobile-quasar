<template>
  <q-page>
    <q-infinite-scroll v-show="bookings.data.length" @load="onLoad" :offset="80" class="q-pa-xs q-mt-lg">
      <q-list v-if="loggedIn && bookings.data.length">
        <trip-item v-for="(booking, index) in bookings.data" :key="index" :booking="booking"
                   @click="goToBookingDetails(booking)"></trip-item>
      </q-list>
      <no-result v-else :msg="`No trip found`"></no-result>
      <template v-slot:loading v-if="isPageAvailable">
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px"/>
        </div>
      </template>
    </q-infinite-scroll>
    <div class="absolute-center" v-if="!loggedIn">
      <div class="text-primary text-h6">Log in please</div>
      <q-btn class="full-width bg-primary text-white q-mt-lg" @click="goToLogin">Log in</q-btn>
    </div>
  </q-page>
</template>
<script>
import TripItem from "components/TripItem";
import {mapState} from "vuex";
import NoResult from "components/NoResult";

export default {
  components: {NoResult, TripItem},
  setup() {
  },
  created() {
    let bookingItems = localStorage.getItem('bookings')
    console.log(JSON.parse(bookingItems))
    if (bookingItems) {
      this.$store.commit('general/MY_BOOKINGS', {success: true, bookings: JSON.parse(bookingItems)})
    } else {
      this.$parent.$q.loading.show()
      this.$store.dispatch('general/myJourney')
        .then(() => {
          this.$parent.$q.loading.hide()
        })
    }
  },
  methods: {
    goToBookingDetails(booking) {
      this.$router.push('/trip-details/' + booking.id)
    },
    onLoad(index, done) {
      setTimeout((e) => {
        if (this.bookings.current_page !== this.bookings.last_page) {
          this.$store.dispatch('general/myJourney')
        }
        done()
      }, 2000)
    },
    goToLogin() {
      this.$store.commit('general/OPEN_LOGIN_FORM')
    }
  },
  computed: {
    isPageAvailable() {
      return this.bookings.last_page > this.bookings.current_page
    },
    ...mapState('general', ['bookings', 'loggedIn'])
  }
}
</script>
