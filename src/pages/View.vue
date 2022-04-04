<template>
  <q-page>
    <q-card class="my-card">
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
          <q-tab name="mails" label="Tab 1"/>
          <q-tab name="alarms" label="Tab 2"/>
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab">
          <q-tab-panel name="mails">
            <div class="row">
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="floor" :options="floors" label="Floor"
                          @change="floorChange"/>
              </div>
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="cabin_type" :options="cabinTypes" label="Type"/>
              </div>
            </div>
            <item-layout :items="trip.cabins"></item-layout>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="row">
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="floor" :options="floors" label="Floor"/>
              </div>
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="seat_type" :options="seatTypes" label="Type"/>
              </div>
            </div>
            <item-layout :items="trip.seats"></item-layout>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
    <cart-section></cart-section>
  </q-page>
</template>
<script>
import {ref} from 'vue'
import ItemLayout from "components/ItemLayout";
import {mapState} from "vuex";
import CartSection from "components/CartSection"

export default {
  components: {ItemLayout, CartSection},
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
    floorChange() {
      alert('ok')
    },
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
    filterCabinByType(property = 'cabin', type) {
      this.$store.dispatch('general/FilterByType', {property: property, type: type})
    }
  },
  computed: {
    cabin_type: {
      get() {
        return this.$store.state.general.search.cabin_type
      },
      set(value) {
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'cabin_type', value: value})
      }
    },
    seat_type: {
      get() {
        return this.$store.state.general.search.seat_type
      },
      set(value) {
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'seat_type', value: value})
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
    ...mapState('general', ['trip', 'searchResults'])
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
