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
    const $q = useQuasar()
  },
  components: {
    BookingForm,
    SearchResult,
    NoResult
  },
  methods: {
    goToBooking(item) {
      this.$store.dispatch("general/viewTrip", {id: item.trip_id, floor: item.default_floor, cabin_type: 0, seat_type: 0})
        .then(() => {
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
