<template>
  <div>
    <q-dialog class="bg-white" v-model="notLoggedIn" persistent transition-show="scale" transition-hide="scale" full-width>
      <q-card class="bg-white">

        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ login.title }}</div>
        </q-card-section>
        <q-card-section v-if="login.step === 'check'">

          <div class="q-gutter-y-md column" id="loginCheck">
            <q-input color="teal" filled v-model="mobile" label="Mobile number">
              <template v-slot:prepend>
                <q-icon name="phone"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section v-if="login.step === 'login'">
        <div class="q-gutter-y-md column" id="loginPassword">
          <q-input color="teal" filled v-model="mobile" label="Mobile number" disable>
            <template v-slot:prepend>
              <q-icon name="phone"/>
            </template>
          </q-input>
          <q-input color="teal" filled v-model="password" label="Password">
            <template v-slot:prepend>
              <q-icon name="password"/>
            </template>
          </q-input>
        </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat color="white" text-color="primary" label="Back" icon="back" />
          <q-btn flat color="teal" label="Confirm" @click="handleLoginForm"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  methods: {
    handleLoginForm(event) {
      switch (this.login.step) {
        case 'check':
          this.$store.dispatch('general/loginCheck')
          break
        case 'login':
          this.$store.dispatch('general/login')
          break
      }
    }
  },
  computed: {
    mobile: {
      get(){
        return this.login.mobile
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'mobile', value:value})
      }
    },
    password: {
      get() {
        return this.login.password
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'password', value:value})
      }
    },
    ...mapState('general', ['notLoggedIn', 'login'])
  }
}
</script>
