<template>
  <div class="q-pa-md q-gutter-sm" v-if="alert.status">
    <q-banner inline-actions rounded class="text-white" :class="alert.success ? 'bg-info' : 'bg-orange'">
      {{ alert.message || 'You have an error' }}

      <template v-slot:action>
        <q-btn flat label="Dismiss" @click="dismissAlert" />
      </template>
    </q-banner>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  methods: {
    dismissAlert(){
        this.$store.commit('general/DISMISS_ALERT')
    }
  },
  computed: {
    ...mapState('general', ['alert'])
  }
}
</script>
