<template>
  <div class="q-pa-md">

    <q-form
      @submit="formSubmit"
    >
      <div class="q-gutter-sm">
        <q-radio v-model="trip_type" val="launch" label="Launch"/>
        <q-radio v-model="trip_type" val="bus" label="Bus" disable/>
<!--        <q-radio v-model="trip_type" val="air" label="Air" hide/>-->
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
              @filter="filterFn"
              behavior="dialog"
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
              @filter="filterFn"
              behavior="dialog"
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
                     @input="removeFocus($event)">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="trip_date"
                      @input="$refs.qDateProxy.hide()">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Ok" color="primary" flat/>
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col">
            <q-input class="q-ma-sm" filled v-model="trip_return_date" label="Return date" mask="date">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date
                      v-model="trip_return_date"
                      @input="$refs.qDateProxy.hide()">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Ok" color="primary" flat/>
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
let objOptions = [
  {
    label: 'Dhaka',
    value: 'dhaka'
  },
  {
    label: 'Barisal',
    value: 'barisal'
  },
  {
    label: 'Elisha',
    value: 'elisha'
  },
  {
    label: 'Charfashion',
    value: 'charfashion'
  },
  {
    label: 'Bhola',
    value: 5
  }
];
export default {
  setup() {
    return {
      search: '',
      options: objOptions,
      model: ''
    }
  },
  methods: {
    ShowStartDatePicker() {
      this.$refs.qDateProxy.show();
      this.$el.blur()
    },
    closeDialog() {
      alert('ok')
      this.$refs.qDateProxy.hide()
      this.$refs.qDateProxy2.hide()
    },
    removeFocus(el) {
      console.log(el)
    },
    formSubmit({commit}, payload) {
      this.$parent.$q.loading.show()
      this.$store.dispatch('general/searchTrip')
      .then((response) => {
        this.$parent.$q.loading.hide()
      })
    },
    closeFromDate() {
      this.$refs.qStartProxy.hide();
    },
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = objOptions
        })
        return
      }

      update(() => {
        let needle = val.toLowerCase()
        this.options = objOptions.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  computed: {
    optionsFiltered () {
      return (options, prop) => {
        const needle = this.search.toLocaleLowerCase()
        const fn = prop === void 0
          ? opt => opt.toLocaleLowerCase().indexOf(needle) > -1
          : opt => opt[prop].toLocaleLowerCase().indexOf(needle) > -1

        return needle.length === 0 ? options : options.filter(fn)
      }
    },
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
    }
  }
}
</script>

<style>
.q-field--with-bottom {
  padding-bottom: 0;
}
</style>
