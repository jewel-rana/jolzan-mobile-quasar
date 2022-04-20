<template>
  <div>
    <q-item clickable :key="booking.id">
      <q-item-section avatar top>
        PNR<br/> {{ booking.pnr }}
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ booking.items[0].vehicle_name}}</q-item-label>
        <q-item-label caption lines="2">{{ booking.items[0].route_name}}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{ booking.booking_date_formatted}}</q-item-label>
        <q-btn color="teal" size="sm" outline>{{ booking.status }}</q-btn>
      </q-item-section>
    </q-item>

    <q-separator spaced inset/>
  </div>
</template>
<script>
export default {
  props: ['booking']
}
</script>
