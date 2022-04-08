<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="80" class="q-pa-xs q-mt-lg">
      <q-list v-if="loggedIn">
        <trip-item v-for="(booking, index) in bookings.data" :key="index" :booking="booking" @click="goToBookingDetails(booking)"></trip-item>
      </q-list>
      <template v-slot:loading v-if="1===2">
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
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
export default {
  components: {TripItem},
  setup() {
  },
  created() {
      this.$parent.$q.loading.show()
      this.$store.dispatch('general/myJourney')
      .then(() => {
        this.$parent.$q.loading.hide()
      })
  },
  methods: {
    goToBookingDetails(booking) {
      this.$store.commit('general/SHOW_BOOKING', booking)
      this.$router.push('/trip-details/' + booking.id)
    },
    onLoad (index, done) {
      setTimeout((e) => {
        if(this.bookings.current_page !== this.bookings.last_page) {
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
    ...mapState('general', ['bookings', 'loggedIn'])
  }
}
</script>
