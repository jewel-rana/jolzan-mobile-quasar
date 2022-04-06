<template>
  <q-page>
    <div>{{ page.content || 'Content not found' }}</div>
  </q-page>
</template>

<script>
import {mapState} from "vuex";

export default {
  created() {
    console.log(this.slug)
    let page = this.page || localStorage.getItem('page')
    if(page) {
      this.$store.commit('general/SET_PAGE', page)
    } else {
      this.$store.dispatch('general/getPage', 'about-us')
    }
  },
  computed: {
    ...mapState('general', ['loggedIn', 'page'])
  }
}
</script>
