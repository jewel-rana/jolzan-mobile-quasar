<template>
  <q-page>
    <div class="q-gutter-lg q-pa-md">
      <address>
        <div class="text-h5">{{ getOption('company_name', "Jolzan.com") }}</div><br>
        <strong>Email:</strong> {{ getOption('company_email', 'info@jolzan.com')}}<br>
        <strong>Website:</strong> {{ getOption('company_website', 'www.jolzan.com')}}<br>
          <strong>Hotline:</strong> {{ getOption('company_phone', '09639 101515')}}<br/>
        <strong>Address:</strong> {{ getOption('company_address', '367, City Plaza Market (3rd Floor), Fazlul Haque Avenue, Barisal Sadar, Barisal')}}
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
