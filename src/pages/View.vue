<template>
  <div>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" height="140px">
        <div class="absolute-bottom text-h6">
          MV KUAKATA 2 <br/>
          <small>Dhaka to Barisal</small>
        </div>
      </q-img>

      <q-card-section>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab name="mails" label="Cabin"/>
          <q-tab name="alarms" label="Seat"/>
        </q-tabs>

        <q-separator/>

        <q-tab-panels v-model="tab">
          <q-tab-panel name="mails">
            <div class="row">
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="floor" :options="floors" label="Floor"/>
              </div>
              <div class="col q-pa-sm">
                <q-select standout="bg-teal text-white" v-model="type" :options="options" label="Cabin type"/>
              </div>
            </div>
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  setup() {
    return {
      tab: ref('mails'),
      type: ref(null),
      floor: ref({label: "Second floor", value: 2}),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      floors: [
        {
          label: 'First floor',
          value: 1
        },
        {
          label: 'Second floor',
          value: 2,
          selected: true
        },
        {
          label: 'Third floor',
          value: 3
        }
      ]
    }
  }
}
</script>
<style scoped>
.q-card {
  border-radius: 0;
}

.q-card__section--vert {
  padding: 0px;
}

.q-tabs--dense .q-tab {
  background: #1976d2;
  color: #fff;
}

.text-primary {
  color: #F4F6F9 !important;
}
</style>
