<template>
  <div>
    <q-dialog class="bg-light-blue-1" v-model="notLoggedIn" persistent transition-show="scale" transition-hide="scale" full-width>
      <q-card class="bg-white">

        <q-card-section class="row items-center bg-primary">
          <div class="text-h6 text-white">{{ login.title }}</div>
          <q-space></q-space>
          <q-btn icon="close" color="white" flat round dense v-close-popup @click="closeDialogue" />
        </q-card-section>
        <alert></alert>
        <q-card-section v-if="login.step === 'check'">

          <div class="q-gutter-y-md column" id="loginCheck">
            <q-input color="teal" filled v-model="mobile" label="Mobile number">
              <template v-slot:prepend>
                <q-icon name="phone"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section v-if="login.step === 'forgot'">

          <div class="q-gutter-y-md column" id="loginForgot">
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
            <q-input color="teal" filled v-model="password" label="Password" type="password">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section v-if="login.step === 'otp' || login.step === 'forgot_otp'">
          <div class="q-gutter-y-md column" id="loginOtp">
            <q-input color="teal" filled v-model="mobile" label="Mobile number" disable>
              <template v-slot:prepend>
                <q-icon name="phone"/>
              </template>
            </q-input>
            <q-input color="teal" filled v-model="otp" label="OTP Code" type="password">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section v-if="login.step === 'reset'">
          <div class="q-gutter-y-md column" id="loginOtp">
            <q-input color="teal" filled v-model="mobile" label="Mobile number" disable>
              <template v-slot:prepend>
                <q-icon name="phone"/>
              </template>
            </q-input>
            <q-input color="teal" filled v-model="password" label="Password" type="password">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
            <q-input color="teal" filled v-model="confirm_password" label="Password confirm" type="password">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-section v-if="login.step === 'register'">
          <div class="q-gutter-y-md column" id="loginRegister">
            <q-input color="teal" filled v-model="mobile" label="Mobile number" disable>
              <template v-slot:prepend>
                <q-icon name="phone"/>
              </template>
            </q-input>

            <q-input color="teal" filled v-model="nid" label="NID Number">
              <template v-slot:prepend>
                <q-icon name="branding_watermark"/>
              </template>
            </q-input>

            <q-input color="teal" filled v-model="name" label="Your name">
              <template v-slot:prepend>
                <q-icon name="people"/>
              </template>
            </q-input>

            <q-input color="teal" filled v-model="email" label="Your email">
              <template v-slot:prepend>
                <q-icon name="email"/>
              </template>
            </q-input>

            <q-input color="teal" filled v-model="password" label="Password" type="password">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>

            <q-input color="teal" filled v-model="confirm_password" label="Confirm Password" type="password">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>
            </q-input>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat color="white" text-color="primary" label="" icon="keyboard_double_arrow_left" v-if="login.step !== 'check'" @click="handleLoginBack" />
          <q-btn flat class="text-primary" clickable @click="forgotPassword" v-if="login.step === 'login'">Forgot password?</q-btn>
          <q-btn flat color="gray" :label="`Resend (` + login.resendTimer + `)`" v-if="login.step === 'otp' && login.resendTimer > 0" disable/>
          <q-btn flat color="primary" label="Resend OTP" @click="resendOtp" v-if="login.step === 'otp' && login.resendTimer === 0"/>
          <q-btn flat color="teal" label="Confirm" @click="handleLoginForm"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import {mapState} from "vuex";
import Alert from "components/elements/Alert";

export default {
  components: {Alert},
  setup(){
    return {
      resendTimeout: 60
    }
  },
  methods: {
    closeDialogue() {
      this.$store.commit('general/DISMISS_LOGIN_FORM')
    },
    forgotPassword() {
      this.$store.commit('general/FORGOT_STEP')
    },
    resendOtp(){
      if(this.login.resendTimer === 0) {
        this.$parent.$q.loading.show()
        this.$store.dispatch('general/ResendOtpCode')
        .then((response) => {
          this.$parent.$q.loading.hide()
          this.startOtpCounter()
          this.$parent.$q.notify({type: 'positive', 'message': 'Re-send OTP Success'})
        })
      }
    },
    handleLoginForm(event) {
      switch (this.login.step) {
        case 'check':
          this.$parent.$q.loading.show()
          this.$store.dispatch('general/loginCheck')
            .then((response) => {
              this.$parent.$q.loading.hide()
              if(this.login.step === 'otp') {
                this.startOtpCounter()
              }
            })
          break
        case 'login':
          this.$store.dispatch('general/login')
          break
        case 'otp':
          this.$parent.$q.loading.show()
          this.$store.dispatch('general/Verify')
          .then((response) => {
            this.$parent.$q.loading.hide()
          })
          break
        case 'register':
          this.$parent.$q.loading.show()
          this.$store.dispatch('general/Register')
            .then((response) => {
              this.$parent.$q.loading.hide()
            })
          break
        case 'forgot':
          this.$parent.$q.loading.show()
          this.$store.dispatch('general/Forgot')
            .then((response) => {
              this.$parent.$q.loading.hide()
            })
          break
        case 'forgot_otp':
          this.$parent.$q.loading.show()
          this.$store.dispatch('general/Verify')
            .then((response) => {
              this.$parent.$q.loading.hide()
            })
          break
        case 'reset':
          this.$parent.$q.loading.show()
          this.$store.dispatch('general/ResetPassword')
            .then((response) => {
              this.$parent.$q.loading.hide()
            })
          break
      }
    },
    handleLoginBack()
    {
      this.$store.commit('general/HANDLE_LOGIN_BACK')
    },
    startOtpCounter() {
      let timeout = 60
      let self = this
      let interval = setInterval(function () {
        timeout = timeout - 1
        self.$store.commit('general/SET_RESEND_TIMER', timeout)
        if (timeout === 0) {
          // Display a login box
          clearInterval(interval);
        }
      }, 1000);
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
    nid: {
      get(){
        return this.login.nid
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'nid', value:value})
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
    confirm_password: {
      get() {
        return this.login.confirm_password
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'confirm_password', value:value})
      }
    },
    name: {
      get() {
        return this.login.name
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'name', value:value})
      }
    },
    email: {
      get() {
        return this.login.email
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'email', value:value})
      }
    },
    otp: {
      get() {
        return this.login.otp
      },
      set(value) {
        this.$store.commit('general/HANDLE_LOGIN_FORM', {key: 'otp', value:value})
      }
    },
    ...mapState('general', ['notLoggedIn', 'login'])
  }
}
</script>
