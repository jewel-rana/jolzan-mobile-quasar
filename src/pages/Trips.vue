<template>
  <q-page>
    <q-infinite-scroll @load="onLoad" :offset="80" class="q-pa-xs">
      <q-list>
        <trip-item></trip-item>
      </q-list>
      <template v-slot:loading v-if="1===2">
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <div class="absolute-center" v-if="loggedIn">
      <div class="text-primary text-h6">Log in please</div>
      <q-btn class="full-width bg-primary text-white q-mt-lg" @click="goToLogin">Log in</q-btn>
    </div>
  </q-page>
</template>
<script>
import TripItem from "components/TripItem";
import {mapState} from "vuex";
export default {
  components: {TripItem},
  setup() {
    function onLoad (index, done) {
      setTimeout(() => {
        if(!this.myTrips.data.length) {
          this.$store.dispatch('general/myJourney')
        }
        done()
      }, 2000)
    }
    return { onLoad }
  },
  created() {
    if(!this.myTrips.data.length && this.loggedIn) {
      this.$parent.$q.loading.show()
      this.$store.dispatch('general/myJourney')
      .then(() => {
        this.$parent.$q.loading.hide()
      })
    }
  },
  methods: {
    goToLogin() {
      this.$store.commit('general/OPEN_LOGIN_FORM')
    }
  },
  computed: {
    ...mapState('general', ['myTrips', 'loggedIn'])
  }
}
</script>
