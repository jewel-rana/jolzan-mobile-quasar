<template>
  <div class="q-pa-md">

    <q-form
      @submit="formSubmit"
    >
      <div class="q-gutter-sm">
        <q-radio v-model="type" val="launch" label="Launch"/>
        <q-radio v-model="type" val="bus" label="Bus"/>
        <q-radio v-model="type" val="air" label="Air"/>
      </div>
      <div class="row items-start">
        <div class="row">
          <div class="col">
            <q-select
              filled
              v-model="from"
              use-input
              input-debounce="0"
              label="From"
              :options="options"
              @filter="filterFn"
              behavior="menu"
              class="q-pa-sm"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
          <div class="col">
            <q-select
              filled
              v-model="to"
              use-input
              input-debounce="0"
              label="To"
              :options="options"
              @filter="filterFn"
              behavior="menu"
              class="q-pa-sm"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <q-input class="q-ma-sm" filled v-model="from_date" label="Journey date" mask="date" @click="$refs.qDateProxy.show()">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="from_date"
                      @input="closeFromDate">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input class="q-ma-sm" filled v-model="to_date" label="Return date" mask="date" @click="$refs.qDateProxy2.show()" @input="$refs.qDateProxy2.hide()">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy2" cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="to_date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
      </div>
      <div class="q-gutter-sm q-ml-none">
        <q-btn label="Search" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapGetters,  mapActions} from 'vuex'
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
export default {
  setup () {
    const options = ref(stringOptions)

    return {
      form: {
        type: ref('launch'),
        from: ref(null),
        to: ref(null),
        from_date: ref("2022/01/02"),
        to_date: ref("2022/01/02"),
      },
      options: ref(stringOptions),
    }
  },
  methods: {
    formSubmit()
    {
      console.log(this.$store)
      this.searchTrip(this.form)
    },
    closeFromDate() {
      this.$refs.qStartProxy.hide();
    },
    ...mapActions('general', ['searchTrip'])
  }
}
</script>

<style>
.q-field--with-bottom {
  padding-bottom: 0;
}
</style>
