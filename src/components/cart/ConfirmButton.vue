<template>
  <div>
    <div class="justify-center vertical-middle">
      <q-btn color="primary" class="full-width" @click="handleConfirm($event, step)">Confirm</q-btn>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: ['step'],
  methods: {
    handleConfirm(e, step) {
      this.$store.commit('general/HANDLE_CONFIRM')
      console.log(this.order)
      this.$router.push('/' + this.order.step)
    }
  },
  computed: {
    ...mapState('general', ['order'])
  }
}
</script>
