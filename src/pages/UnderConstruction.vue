<template>
  <q-page>
    <div class="absolute-center">
      <div class="text-teal text-h6">Coming soon...</div>
      <q-btn class="full-width bg-primary text-white q-mt-lg" @click="goToHome">Go to home</q-btn>
    </div>
  </q-page>
</template>

<script>
import Constants from "src/services/constants";
import {mapState} from "vuex";

export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState('general', ['alert'])
  }
}
</script>
