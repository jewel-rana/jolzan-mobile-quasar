<template>
  <div class="q-pa-md">
    <q-btn class="full-width" color="deep-orange" glossy @click="cancelBooking">Cancel Booking</q-btn>
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
