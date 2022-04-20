<template>
  <q-page>
    <div class="q-pa-md q-gutter-y-sm column">
      <q-toggle
        :label="`Dark mode ${darkMode}`"
        false-value="Disabled"
        true-value="Enabled"
        v-model="darkMode"
      />
      <q-toggle
        :label="`Bangla ${language}`"
        false-value="Disabled"
        true-value="Enabled"
        v-model="language"
      />

      <q-toggle
        :label="`Account ${accountActive}`"
        false-value="Disabled"
        true-value="Enabled"
        v-model="accountActive"
      />

      <q-toggle
        :label="`Push notification ${pushNotification}`"
        false-value="Disabled"
        true-value="Enabled"
        v-model="pushNotification"
      />
    </div>
  </q-page>
</template>

<script>

import {mapState} from "vuex";

export default {
  computed: {
    darkMode: {
      get() {
        return this.settings.darkMode
      },
      set(value) {
        this.$parent.$q.dark.set(value === 'Enabled')
        this.$store.commit('general/HANDLE_SETTINGS', {key: 'dark_mode', value: value})
      }
    },
    accountActive: {
      get() {
        return this.settings.accountActive
      },
      set(value) {
        this.$store.commit('general/HANDLE_SETTINGS', {key: 'account_active', value: value})
      }
    },
    pushNotification: {
      get() {
        return this.settings.pushNotification
      },
      set(value) {
        this.$store.commit('general/HANDLE_SETTINGS', {key: 'push_notification', value: value})
      }
    },
    language: {
      get() {
        return this.settings.language
      },
      set(value) {
        this.$store.commit('general/HANDLE_SETTINGS', {key: 'language', value: value})
      }
    },
    ...mapState('general', ['settings'])
  }

}
</script>
