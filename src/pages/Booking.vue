<template>
  <q-page>
    <booking-form></booking-form>
    <search-result @click="goToBooking(0)" v-if="1 === 1"></search-result>
    <no-result v-else></no-result>
  </q-page>
</template>
<script>
import BookingForm from 'components/BookingForm.vue'
import SearchResult from 'components/SearchResult.vue'
import NoResult from 'components/NoResult.vue'
export default {
  components: {
    BookingForm,
    SearchResult,
    NoResult
  },
  methods: {
    goToBooking(item) {
      this.$router.push('/booking/2122')
    }
  }
}
</script>
