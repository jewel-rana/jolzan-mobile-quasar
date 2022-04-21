<template>
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
    <q-list padding>
      <q-item clickable v-ripple v-for="nav in navigations" :key="nav.label" :to="nav.to">
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>{{ nav.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>

  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      <div class="text-weight-bold">{{ loggedIn ? user.name : 'Guest'}}</div>
    </div>
  </q-img>
</template>

<script>
import {mapState} from 'vuex'
const navigations = [
  {
    label: 'Booking',
    icon: 'search',
    to: '/booking'
  },
  {
    label: 'Trips',
    icon: 'route',
    to: '/trips'
  },
  {
    label: 'Support',
    icon: 'support_agent',
    to: '/support'
  },
  {
    label: 'About us',
    icon: 'info',
    to: '/about-us'
  },
  {
    label: 'Our Service',
    icon: 'design_services',
    to: '/services'
  },
  {
    label: 'Privacy policy',
    icon: 'policy',
    to: '/privacy-policy'
  },
  {
    label: 'Terms & Condition',
    icon: 'ac_unit',
    to: '/terms-and-conditions'
  },
  {
    label: 'Cancel & Refund Policy',
    icon: 'cancel_presentation',
    to: 'refund-policy'
  },
  {
    label: 'How to Buy Tickets',
    icon: 'how_to_vote',
    to: 'how-to-buy-tickets'
  },
  {
    label: 'FAQ',
    icon: 'quiz',
    to: '/faq'
  },
  {
    label: 'Settings',
    icon: 'settings',
    to: '/settings'
  },
];
export default {
  setup() {
    return {
      navigations: navigations
    }
  },
  computed: {
    ...mapState('general', ['loggedIn', 'user'])
  }
}
</script>
