<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn round color="default" icon="chevron_left" v-if="1===2"/>
        <q-toolbar-title>
          <img
            alt="Jolzan"
            src="~assets/logo-white.png"
            style="width: auto; height: 66px"
          >
        </q-toolbar-title>
      </q-toolbar>
<!--      <q-tabs align="right">-->
<!--        <q-route-tab to="/page1" label="Page One" />-->
<!--        <q-route-tab to="/page2" label="Page Two" />-->
<!--        <q-route-tab to="/page3" label="Page Three" />-->
<!--      </q-tabs>-->
    </q-header>

    <q-footer elevated>
        <q-tabs
          v-model="tab"
          dense
          clickable
          align="justify"
          class="bg-primary text-white shadow-2"
          :breakpoint="0"
        >
          <q-route-tab v-for="nav in navigations" :to="nav.to" :name="nav.level" :key="nav.level" :icon="nav.icon" :label="nav.level" />
        </q-tabs>
    </q-footer>

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

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import FooterNavigation from 'components/FooterNavigation.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];
const navigations = [
  {
    level: "Home",
    icon: 'home',
    to: '/'
  },
  {
    level: "Booking",
    icon: 'home',
    to: 'booking'
  },
  {
    level: "My Trips",
    icon: 'home',
    to: 'trips'
  },
  {
    level: "Support",
    icon: 'home',
    to: 'support'
  },
  {
    level: "More",
    icon: 'list',
    to: 'more'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    FooterNavigation
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      navigations: navigations,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
