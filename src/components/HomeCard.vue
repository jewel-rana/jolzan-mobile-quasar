<template>
  <div class="q-pa-md items-start">
      <div class="row">
        <div class="col q-pa-sm">
          <q-card class="my-card active cursor-pointer" @click="goToBooking('launch')">
            <q-card-section>
              <div class="text-h6">
                <q-icon name="directions_boat_filled"></q-icon>
              </div>
              <div class="text-subtitle2">Launch</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pa-sm">
          <q-card class="my-card disable">
            <q-card-section>
              <div class="text-h6">
                <q-icon name="directions_bus_filled"></q-icon>
              </div>
              <div class="text-subtitle2">Bus</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col q-pa-sm">
          <q-card class="my-card disable" >
            <q-card-section>
              <div class="text-h6">
                <q-icon name="two_wheeler"></q-icon>
              </div>
              <div class="text-subtitle2">Bike</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    <div class="row">
      <div class="col q-pa-sm">
        <q-card class="my-card disable">
          <q-card-section>
            <div class="text-h6">
              <q-icon name="train"></q-icon>
            </div>
            <div class="text-subtitle2">Train</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-pa-sm">
        <q-card class="my-card disable">
          <q-card-section class="text-center">
            <div class="text-h6">
              <q-icon name="flight_takeoff"></q-icon>
            </div>
            <div class="text-subtitle2 text-center">Air</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col q-pa-sm">
        <q-card class="my-card disable">
          <q-card-section>
            <div class="text-h6">
              <q-icon name="local_shipping"></q-icon>
            </div>
            <div class="text-subtitle2">Truck</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  methods: {
    goToBooking(type) {
      this.$store.commit('general/SET_SEARCH_TYPE', {type: type})
      this.$router.push('/booking')
    }
  },
  computed: {
    ...mapState('general', ['order'])
  }
}
</script>

<style scoped>
.q-card {
  border-radius: 0;
}
.q-card.my-card.active {
  background: #0e65bb; /*#1976d2; */
  color: #fff;
}
.q-card.my-card.active:hover {
  background: teal;
}
.q-card.my-card.disable {
  background: #f2f2f2;
  color: #bdb0b0;
  box-shadow: inherit;
}
</style>
