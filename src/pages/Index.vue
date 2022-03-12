<template>
  <q-page>
    <home-card class="q-pa-md" align="center"></home-card>
    <home-slider></home-slider>
  </q-page>
</template>

<script>

import HomeCard from 'components/HomeCard.vue'
import HomeSlider from 'components/HomeSlider.vue'
export default {
  components: {
    HomeCard,
    HomeSlider
  }
}
</script>
