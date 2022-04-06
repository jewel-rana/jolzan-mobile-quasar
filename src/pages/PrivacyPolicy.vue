<template>
  <q-page>
    <div class="q-pa-lg" v-html="pages.content"></div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";

export default {
  created() {
    let page = this.page || localStorage.getItem('page')
    if(page) {
      this.$store.commit('general/SET_PAGE', page)
    } else {
      this.$store.dispatch('general/getPage', 'privacy-policy')
    }
  },
  computed: {
    ...mapState('general', ['loggedIn', 'pages'])
  }
}
</script>
