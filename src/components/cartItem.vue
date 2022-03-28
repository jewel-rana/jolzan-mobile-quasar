<template>
  <div>
    <q-item :key="index">
      <q-item-section avatar top>
        <q-icon v-if="item.type === 'cabin'" name="bed" color="black" size="34px"/>
        <q-icon v-if="item.type === 'seat'" name="chair" color="black" size="34px"/>
      </q-item-section>

      <q-item-section top>
        <q-item-label lines="1">
          <span class="text-weight-medium">{{ item.vehicle_name }} </span>
          <span class="text-grey-8"> {{ item.route_name }}</span>
        </q-item-label>
        <q-item-label lines="1">{{ item.cabin_no }}</q-item-label>
      </q-item-section>

      <q-item-section top class="col-2">
        <q-item-label>{{ item.fare }}/-</q-item-label>
      </q-item-section>

      <q-item-section top side>
        <div class="text-grey-8 q-gutter-xs">
          <q-btn size="12px" flat dense round icon="delete"
                 @click="removeCartItem(index)"/>
        </div>
      </q-item-section>
    </q-item>
    <q-item v-if="1===2">
      <q-item-label>
        <div class="q-gutter-sm">
          <q-radio v-model="shape" val="self" label="My self"
                   @change="togglePassengerDetails($event, index)" value="self"/>
          <q-radio v-model="shape" val="other" label="Others"
                   @change="togglePassengerDetails($event, index)" value="self"/>
        </div>
        <q-separator></q-separator>
        <div class="row">
          <div class="col">
            <q-input class="q-ma-sm" filled bottom-slots label="Passenger Name" :value="item.passenger.name" @keyup="changePassengerName($event, index)">
              <template v-slot:prepend>
                <q-icon name="people"/>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input class="q-ma-sm" filled bottom-slots label="Mobile number"
                     :dense="dense">
              <template v-slot:prepend>
                <q-icon name="phone"/>
              </template>
            </q-input>
          </div>
        </div>
      </q-item-label>
    </q-item>
    <q-separator v-if="cart.length > 1"></q-separator>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: ['item', 'index'],
  methods: {
    removeCartItem(index) {
      console.log(index)
      const item = this.cart[index]
      this.$store.dispatch("general/removeItemFromCart", {item: item, index: index, token: this.customer_token})
        .then(() => {
          if (!this.cart) {
          }
        })
        .catch(error => {
        })
    },
    togglePassengerDetails(event, index) {
      let value = event.target.value
      this.$store.commit('CHANGE_PASSENGER_TYPE', {index:index, value: value})
    },
    getHumanDate : function (date) {
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    changeBoardingPoint(event, index) {
      this.$store.dispatch("general/changeBoardingPoint", {id: event.target.value, index: index})
    },
    changePassengerName(event, test, index) {
      console.log(index)
      // this.$store.dispatch("general/changePassengerName", {name: event.target.value, index: index})
    },
    changePassengerMobile(event, index) {
      this.$store.dispatch("general/changePassengerMobile", {name: event.target.value, index: index})
    }
  },
  computed: {
    passengerType: {
      get(itemId) {
        console.log(itemId)
        return true
      },
      set(val, itemId) {
        console.log(itemId)
      }
    },
    ...mapState('general', ['cart', 'customer_token'])
  }
}
</script>
