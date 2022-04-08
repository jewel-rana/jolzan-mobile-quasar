<template>
  <q-page>
    <q-card class="my-card" v-if="trip">
        <q-img :src="trip.vehicle_photo || '/images/default-banner.jpg'" height="140px">
          <div class="absolute-bottom text-h6">
            {{ trip.vehicle_name }} <br/>
            <small>{{ trip.route_name }}</small>
          </div>
        </q-img>

      <q-card-section>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab name="mails" label="Cabin"/>
          <q-tab name="alarms" label="Seat"/>
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab">
          <q-tab-panel name="mails">
            <div class="row">
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="cabin_floor" :options="floors" label="Floor"/>
              </div>
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="cabin_type" :options="cabinTypes" label="Type"/>
              </div>
            </div>
            <item-layout v-if="trip.cabins" :items="trip.cabins"></item-layout>
            <no-result v-else :msg="`No cabin found`"></no-result>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="row">
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="cabin_floor" :options="floors" label="Floor"/>
              </div>
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="seat_type" :options="seatTypes" label="Type"/>
              </div>
            </div>
            <item-layout v-if="trip.seats" :items="trip.seats"></item-layout>
            <no-result v-else :msg="`No seat found`"></no-result>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
    <no-result v-else></no-result>
    <cart-section></cart-section>
  </q-page>
</template>
<script>
import {ref} from 'vue'
import ItemLayout from "components/ItemLayout";
import {mapState} from "vuex";
import CartSection from "components/CartSection"
import NoResult from "components/NoResult";

export default {
  components: {NoResult, ItemLayout, CartSection},
  setup() {
    return {
      tab: ref('mails')
    }
  },
  created() {
    let cartItems = localStorage.getItem('cart')
    if(cartItems) {
      this.$store.commit('general/SYNCHRONIZE_WITH_CART_ITEMS', cartItems)
    }
    const trip = localStorage.getItem('trip');
    console.log(JSON.parse(trip))
    if (trip) {
      this.$store.commit('general/SET_TRIP_ITEM', {data: JSON.parse(trip)})
    } else {
      this.$store.dispatch("general/viewTrip", {
        id: this.$route.params.id,
        floor: this.$store.state.general.search.floor.value,
        cabin_type: this.$store.state.general.search.cabin_type.value,
        seat_type: this.$store.state.general.search.seat_type.value
      })
        .then(() => {
          this.$router.push('/booking/' + this.$route.params.id)
        })
    }
  },
  methods: {
    cabinStatus(cabin) {
      let status = "cabin-active"
      switch (cabin.status) {
        case '0' :
          status = "cabin-active"
          break
        case '1' :
          status = "cabin-disable"
          break;
      }
      return status
    },
    loadTrip() {
      this.$parent.$q.loading.show()
      this.$store.dispatch("general/viewTrip", {
        id: this.$route.params.id,
        floor: this.search.floor.value || 2,
        cabin_type: this.search.cabin_type.value || 0,
        seat_type: this.search.seat_type.value || 0
      })
        .then(() => {
          this.$parent.$q.loading.hide()
        })
    }
  },
  computed: {
    cabin_type: {
      get() {
        return this.$store.state.general.search.cabin_type
      },
      set(value) {
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'cabin_type', value: value})
        this.$store.dispatch('general/FilterByType', {property: 'cabin', type: value.value})
      }
    },
    cabin_floor: {
      get() {
        return this.$store.state.general.search.floor
      },
      set(val) {
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'floor', value: val})
        this.loadTrip()
      }
    },
    seat_type: {
      get() {
        return this.$store.state.general.search.seat_type
      },
      set(value) {
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'seat_type', value: value})
        this.$store.dispatch('general/FilterByType', {property: 'seat', type: value.value})
      }
    },
    floors() {
      return this.trip.floors
    },
    cabinTypes() {
      return this.trip.cabin_types
    },
    seatTypes() {
      return this.trip.seat_types
    },
    ...mapState('general', ['trip', 'search', 'searchResults'])
  }
}
</script>
<style scoped>
.q-img__content > div {
  padding: 5px 15px;
  background: rgba(24, 104, 174, 0.62);
}
.q-card {
  border-radius: 0;
  box-shadow: inherit;
}

.q-card__section--vert {
  padding: 0px;
}

.q-tabs--dense .q-tab {
  background: #1976d2;
  color: #fff;
}

.text-primary {
  color: #F4F6F9 !important;
}
</style>
