<template>
  <div class="q-pa-md">

    <q-form
      @submit="formSubmit"
    >
      <div class="q-gutter-sm">
        <q-radio v-model="trip_type" val="launch" label="Launch"/>
        <q-radio v-model="trip_type" val="bus" label="Bus"/>
        <q-radio v-model="trip_type" val="air" label="Air"/>
      </div>
      <div class="row items-start">
        <div class="row">
          <div class="col">
            <q-select
              filled
              v-model="trip_from"
              use-input
              input-debounce="0"
              label="From"
              :options="options"
              @filter="optionsFiltered(options, 'label')"
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
              v-model="trip_to"
              use-input
              input-debounce="0"
              label="To"
              :options="options"
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
            <q-input class="q-ma-sm" filled v-model="trip_date" label="Journey date" mask="date"
                     @click="$refs.qDateProxy.show()">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="trip_date"
                      @input="closeFromDate">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat/>
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input class="q-ma-sm" filled v-model="trip_return_date" label="Return date" mask="date"
                     @click="$refs.qDateProxy2.show()" @input="$refs.qDateProxy2.hide()">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy2" cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="trip_return_date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat/>
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
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
  setup() {
    return {
      search: ''
    }
  },
  methods: {
    formSubmit({commit}, payload) {
      console.log(this.$store)
      this.$store.dispatch('general/searchTrip')
    },
    closeFromDate() {
      this.$refs.qStartProxy.hide();
    },
    filterFn (val, update) {
      this.search = val
      update()
    }
  },
  computed: {
    trip_type: {
      get(){
        return this.$store.state.general.search.type
      },
      set(value){
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'type', value: value})
      }
    },
    trip_from: {
      get(){
        return this.$store.state.general.search.trip_from
      },
      set(value){
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'trip_from', value: value})
      }
    },
    trip_to: {
      get(){
        return this.$store.state.general.search.trip_to
      },
      set(value){
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'trip_to', value: value})
      }
    },
    trip_date: {
      get(){
        return this.$store.state.general.search.trip_date
      },
      set(value){
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'trip_date', value: value})
      }
    },
    trip_return_date: {
      get(){
        return this.$store.state.general.search.trip_return_date
      },
      set(value){
        this.$store.commit('general/UPDATE_FORM_DATA', {key: 'trip_return_date', value: value})
      }
    },
    options() {
      return [
        {label: 'Dhaka', value: 1},
        {label: 'Barishal', value: 2}
      ]
    },
    optionsFiltered () {
      return this.options
    }
  }
}
</script>

<style>
.q-field--with-bottom {
  padding-bottom: 0;
}
</style>
