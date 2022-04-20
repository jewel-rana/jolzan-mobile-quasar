<template>
  <q-page>
    <booking-form></booking-form>
    <search-result v-if="searchResults.length" v-for="item in searchResults" :item="item" @click="goToBooking(item)"></search-result>
    <no-result v-else></no-result>
  </q-page>
</template>
<script>
import BookingForm from 'components/BookingForm.vue'
import SearchResult from 'components/SearchResult.vue'
import NoResult from 'components/NoResult.vue'
import {mapState} from "vuex";
import {useQuasar} from "quasar";
export default {
  setup(){

  },
  components: {
    BookingForm,
    SearchResult,
    NoResult
  },
  created() {
    this.$parent.$q.loading.show()
    this.$store.dispatch('general/searchTrip')
    .then(() => {
      this.$parent.$q.loading.hide()
    })
  },
  methods: {
    goToBooking(item) {
      this.$parent.$q.loading.show()
      this.$store.dispatch("general/viewTrip", {id: item.trip_id, floor: item.default_floor, cabin_type: 0, seat_type: 0})
        .then(() => {
          this.$parent.$q.loading.hide()
          this.$router.push('/booking/' + item.trip_id)
        })
      .catch((error) =>  {
      })
    }
  },
  computed: {
    ...mapState('general', ['searchResults'])
  }
}
</script>
