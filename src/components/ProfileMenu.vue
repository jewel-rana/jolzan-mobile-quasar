<template>
  <div>
    <q-btn flat rounded icon="login" label="Log in" v-if="!loggedIn" @click="openLoginDialogue"></q-btn>
    <q-btn flat rounded :label="user.name" v-else>
      <q-avatar class="q-pl-md">
        <img :src="user.photo">
      </q-avatar>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column" v-if="1 === 2">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data"/>
            <q-toggle v-model="bluetooth" label="Bluetooth"/>
          </div>

          <q-separator vertical inset class="q-mx-lg" v-if="1===2"/>

          <div class="column items-center">
            <q-avatar size="72px"  @click="goToProfile">
              <img :src="user.photo" class="cursor-pointer">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ user.name }}</div>
            <div class="q-pa-md q-gutter-sm">

              <q-btn
                class="full-width" flat
                color="primary"
                label="My profile"
                icon="people"
                @click="goToProfile"
              />
              <q-btn
                class="full-width" flat color="deep-orange"
                label="Logout"
                icon="logout"
                push
                @click="logout"
              />
            </div>
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  methods: {
    goToProfile(){
      this.$router.push('/profile')
    },
    openLoginDialogue(){
      this.$store.commit('general/OPEN_LOGIN_FORM')
    },
    logout() {
      this.$store.dispatch('general/logout')
        .then((response) => {
          this.$router.push('/')
        })
    }
  },
  computed: {
    ...mapState('general', ['user', 'loggedIn'])
  }
}
</script>
