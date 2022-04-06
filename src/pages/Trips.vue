<template>
  <q-page>
    <div class="q-pt-md q-pb-md">
      <q-list v-if="bookings.data.length">
        <trip-item></trip-item>
      </q-list>
      <div class="absolute-center" v-else>
        <div class="text-teal text-h7">Sorry! you are not logged in</div>
        <q-btn flat color="primary" class="full-width q-mt-lg" @click="goToLogin">Log in now</q-btn>
      </div>
    </div>
  </q-page>
</template>
<script>
import TripItem from "components/TripItem";
import {mapState} from "vuex";
export default {
  components: {TripItem},
  methods: {
    goToLogin(){
      this.$store.commit('general/OPEN_LOGIN_FORM')
    }
  },
  computed: {
    ...mapState('general', ['bookings'])
  }
}
</script>
