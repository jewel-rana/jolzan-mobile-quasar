<template>
  <q-page>
    <div class="q-gutter-lg q-pa-md">
      <div class="row">
        <div class="col">
          <q-avatar class="q-pl-md">
            <img :src="user.photo">
          </q-avatar>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState('general', ['user'])
  }
}
</script>
