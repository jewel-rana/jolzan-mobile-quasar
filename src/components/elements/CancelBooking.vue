<template>
  <div class="q-pa-md">
    <q-btn class="full-width" color="negative" outline @click="cancelBooking">Cancel Booking</q-btn>
  </div>
</template>
<script>
export default {
  methods: {
    cancelBooking() {
      this.$router.push('/booking-cancel')
    }
  }
}
</script>
