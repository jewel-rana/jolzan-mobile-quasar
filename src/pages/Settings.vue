<template>
  <q-page>
    <div class="q-pa-md q-gutter-y-sm column">
      <q-toggle
        :label="`Dark mode ${darkMode}`"
        v-model="darkMode"
      />

      <q-toggle
        label="Account active"
        color="pink"
        false-value="Disagreed"
        true-value="Agreed"
        v-model="accountActive"
      />

      <q-toggle
        :false-value="13"
        :label="`Push notification ${pushNotification}`"
        :true-value="42"
        color="green"
        v-model="pushNotification"
      />
    </div>
  </q-page>
</template>

<script>

export default {
  computed: {
    darkMode: {
      get() {
        return false
      },
      set(value) {
        console.log('Dark mode')
      }
    },
    accountActive: {
      get() {
        return true
      },
      set(value) {
        console.log('Account Active')
      }
    },
    pushNotification: {
      get() {
        return true
      },
      set(value) {
        console.log('push notification')
      }
    }
  }
}
</script>
