<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col justify-center">
          <q-avatar size="100px" color="primary" class="bi-align-center justify-center">
            <img :src="user.photo"/>
          </q-avatar>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="text-teal-3 text-bold">Personal Info</div>
        </div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-5">Name</div>
        <div class="col-7">: {{ user.name }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-5">Email</div>
        <div class="col-7">: {{ user.email }}</div>
      </div>
      <q-separator/>
      <div class="row q-pt-sm">
        <div class="col-5">Mobile</div>
        <div class="col-7">: {{ user.mobile }}</div>
      </div>
    </div>
  </q-page>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState('general', ['user'])
  }
}
</script>
