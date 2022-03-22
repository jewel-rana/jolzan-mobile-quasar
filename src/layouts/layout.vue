<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn round color="default" icon="chevron_left" @click="goToBack" v-if="1===1"/>
        <q-toolbar-title>
          MyFirstApp
<!--          <img-->
<!--            alt="Jolzan"-->
<!--            src="~assets/logo-white.png"-->
<!--            style="width: auto; height: 66px"-->
<!--          >-->
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
          <q-route-tab v-for="nav in navigations" :to="nav.to" :name="nav.to" :key="nav.level" :icon="nav.icon" :label="nav.level" exact-active-class="tab-active" />
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

const navigations = [
  {
    level: "Home",
    icon: 'home',
    to: '/'
  },
  {
    level: "Booking",
    icon: 'home',
    to: '/booking'
  },
  {
    level: "My Trips",
    icon: 'home',
    to: '/trips'
  },
  {
    level: "Support",
    icon: 'home',
    to: '/support'
  },
  {
    level: "More",
    icon: 'list',
    to: '/more'
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
      navigations: navigations,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    goToBack()
    {
      return this.$router.go(-1)
    }
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
