<template>
  <q-page>
    <div class="q-gutter-lg q-pa-md">
      <address>
        <div class="text-h5">{{ getOption('company_name', "Jolzan.com") }}</div><br>
        <strong>Email:</strong> info@jolzan.com<br>
        <strong>Website:</strong> jolzan.com<br>
          <strong>Hotline:</strong> 01911785317<br/>
        <strong>Address:</strong> 367, City Plaza Market (3rd Floor), <br>
        Fazlul Haque Avenue, Barisal Sadar<br>
        Barisal
      </address>
    </div>
  </q-page>
</template>
<script>
import {mapState, mapGetters} from "vuex";

export default {
  methods: {
    getOption(key, default_val = '') {
      let options = this.siteData.options
      return options[key] || default_val;
    }
  },
  computed: {
    ...mapState('general', ['siteData'])
  }
}
</script>
