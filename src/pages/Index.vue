<template>
  <q-page>
    <home-card class="q-pa-md" align="center"></home-card>
    <cancel-booking></cancel-booking>
    <home-slider v-if="1===3"></home-slider>
  </q-page>
</template>

<script>

import HomeCard from 'components/HomeCard.vue'
import HomeSlider from 'components/HomeSlider.vue'
import CancelBooking from "components/elements/CancelBooking";
export default {
  components: {
    HomeCard,
    HomeSlider,
    CancelBooking
  }
}
</script>
