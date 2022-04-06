<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated dark="true">
      <q-toolbar>
        <q-toolbar-title class="q-pt-sm">
                    <img
                      alt="Jolzan"
                      src="~assets/logo-white.png"
                      style="width: auto; height: 36px"
                      title="Jolzan"
                    >
        </q-toolbar-title>
        <profile-menu></profile-menu>
      </q-toolbar>
      <q-toolbar class="bg-white text-primary" v-if="isNotHome">
        <q-btn round flat color="primary" icon="chevron_left" @click="goToBack"/>
        <q-toolbar-title>
          {{ pageTitle }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="667"
      :width="250"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navigation
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer elevated v-if="$parent.$q.screen.lt.sm">
      <q-tabs
        v-model="tab"
        dense
        clickable
        align="justify"
        class="bg-primary text-white shadow-2"
        :breakpoint="0"
      >
        <q-route-tab v-for="nav in navigations" :to="nav.to" :name="nav.to" :key="nav.level" :icon="nav.icon"
                     :label="nav.level" exact-active-class="tab-active"/>
        <q-tab clickable name="More" key="99" icon="list" label="More" @click="showBottomSheet" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import FooterNavigation from 'components/FooterNavigation.vue'
import ProfileMenu from "components/ProfileMenu";

const navigations = [
  {
    level: "Home",
    icon: 'home',
    to: '/'
  },
  {
    level: "Booking",
    icon: 'search',
    to: '/booking'
  },
  {
    level: "Trips",
    icon: 'route',
    to: '/trips'
  }
];

import {defineComponent, ref} from 'vue'
import {mapState} from "vuex";

export default defineComponent({
  name: 'MainLayout',

  components: {
    FooterNavigation,
    ProfileMenu
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      navigations: navigations,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    goToBack() {
      return this.$router.go(-1)
    },
    showBottomSheet(grid) {
      this.$parent.$q.bottomSheet({
        message: 'More links',
        grid,
        actions: [
          {
            label: 'Support',
            icon: 'support_agent',
            id: 'support'
          },
          {},
          {
            label: 'About us',
            icon: 'info',
            id: 'about'
          },,
          {
            label: 'Our Service',
            icon: 'design_services',
            id: 'services'
          },
          {
            label: 'Privacy policy',
            icon: 'policy',
            id: 'policy'
          },
          {
            label: 'Terms & Condition',
            icon: 'ac_unit',
            id: 'terms'
          },
          {
            label: 'FAQ',
            icon: 'quiz',
            id: 'faq'
          },
          {},
          {
            label: 'Settings',
            icon: 'settings',
            id: 'settings'
          },
          {},
        ]
      }).onOk(action => {
        console.log('Action chosen:', action.id)
        switch (action.id) {
          case 'support':
            this.$router.push('/support')
            break
          case 'about':
            this.$router.push('/about-us')
            break
          case 'services':
            this.$router.push('/services')
            break
          case 'privacy':
            this.$router.push('/privacy-policy')
            break
          case 'terms':
            this.$router.push('/terms-and-conditions')
            break
          case 'faq':
            this.$router.push('/faq')
            break
          case 'settings':
            this.$router.push('/settings')
            break
        }
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

  },
  computed: {
    isNotHome() {
      return (this.$route.path !== "/")
    },
    pageTitle(){
      return this.$route.name
    },
    ...mapState('general', ['loggedIn'])
  }
})
</script>

<style>
.q-tab__indicator {
  background: none;
}

.tab-active {
  background: #fff;
  color: #000;
}
</style>
