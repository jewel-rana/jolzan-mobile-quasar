<template>
  <q-page>
    <div class="q-pa-lg" v-html="pages.content"></div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";

export default {
  created() {
    this.$parent.$q.loading.show()
    this.$parent.$q.loading.show()
    this.$store.dispatch('general/getPage', 'about-us')
      .then((response) => {
        this.$parent.$q.loading.hide()
      })
  },
  computed: {
    ...mapState('general', ['loggedIn', 'pages'])
  }
}
</script>
