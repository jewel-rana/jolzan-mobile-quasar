<template>
  <div class="q-pa-md">
    <div id="favouriteVehicles">
      <div class="text-h5">My favourite</div>
      <q-carousel
        arrows
        animated
        v-model="slide"
        :height="carouselHeight"
      >
        <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h6">First stop</div>
            <div class="text-subtitle2">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h5">Second stop</div>
            <div class="text-subtitle2">Famous City</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h5">Third stop</div>
            <div class="text-subtitle2">Famous Bridge</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useQuasar} from "quasar";

export default {
  setup() {
    const $q = useQuasar()
    return {
      slide: ref('first')
    }
  },
  computed: {
    carouselHeight() {
      return this.$q.screen.lt.md ? '140px' : '400px'
    }
  }
}
</script>



<style scoped>
.absolute-bottom.custom-caption {
  background: #1976d2a3;
  color: #fff;
  padding: 5px 10px;
}

#favouriteVehicles {
  background-color: #fff;
  padding: 0 10px 10px;
  border: 2px solid #B5D3F0;
  border-radius: 5px;
  color: #1976d2;
}
</style>
