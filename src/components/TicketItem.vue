<template>
  <div>
    <q-item :key="index" :class="ticketStatus">
      <q-item-section avatar top>
        <q-icon v-if="item.cabin_type === 'cabin'" name="bed" color="black" size="26px"/>
        <q-icon v-if="item.cabin_type === 'seat'" name="chair" color="black" size="26px"/>
        <q-item-label lines="1"><small>{{ item.cabin_no }}</small></q-item-label>
      </q-item-section>

      <q-item-section top>
        <q-item-label lines="1">
          <span class="text-weight-medium">{{ item.vehicle_name }} </span>
        </q-item-label>
        <q-item-label>
          <span class="text-grey-8 text-bold"> {{ item.route_name }}</span>
        </q-item-label>
      </q-item-section>

      <q-item-section top side class="q-pl-xs">
        <q-item-label>{{ item.price }}/-</q-item-label>
      </q-item-section>

<!--      <q-item-section top side class="q-pl-xs">-->
<!--        <div class="text-grey-8">-->
<!--          <q-btn flat dense round :label="ticketStatus" color="teal"/>-->
<!--        </div>-->
<!--      </q-item-section>-->
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
    <q-separator></q-separator>
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
      this.$parent.$q.loading.show()
      this.$store.dispatch("general/removeItemFromCart", {item: item, index: index, token: this.customer_token})
        .then(() => {
          this.$parent.$q.loading.hide()
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
    },
    ticketStatusIcon() {
      let icon = 'pending'
      switch (this.item.status) {
        case '1':
          icon = 'ok'
          break
        case '2':
          icon = 'cancel_presentation'
          break
      }
      return icon
    }
  },
  computed: {
    ticketStatus() {
      let status = 'Pending'
      switch (this.item.status) {
        case 1:
          status = 'Success'
          break
        case 2:
          status = 'Canceled'
          break
      }
      return status
    },
    passengerType: {
      get(itemId) {
        console.log(itemId)
        return true
      },
      set(val, itemId) {
        console.log(itemId)
      }
    },
    ...mapState('general', ['cart', 'customer_token', 'order'])
  }
}
</script>

<style scoped>
legend {
  border: 1px solid #f2f2f2;
}
</style>
