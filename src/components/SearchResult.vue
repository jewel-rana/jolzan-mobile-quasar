<template>
  <div class="q-pa-md">
      <q-list>
        <q-item>
          <q-item-section top thumbnail class="q-ml-none">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>

          <q-item-section>
            <q-item-label style="font-size: 17px; color: dodgerblue"><strong>MV Kuakata 2</strong></q-item-label>
            <q-item-label><q-icon name="route" size="18px"></q-icon><strong>Dhaka - Barisal</strong></q-item-label>
            <q-item-label caption><q-icon name="event" size="18px"></q-icon> Friday 12 @7:30 pm</q-item-label>
          </q-item-section>

          <q-item-section side top class="q-pa-sm">
            <q-item-label>Available</q-item-label>
            <q-item-label class="q-pr-sm"><q-icon name="bed" size="16px"></q-icon> Cabin 12</q-item-label>
            <q-item-label class="q-pr-sm"><q-icon name="chair" size="16px"></q-icon> Seat 12</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
<!--    <q-card class="my-card">-->
<!--      <q-parallax-->
<!--        src="https://cdn.quasar.dev/img/parallax1.jpg"-->
<!--        :height="150"-->
<!--      />-->

<!--      <q-card-section>-->
<!--        <div class="text-h6">MV Kuakata 2</div>-->
<!--        <div class="text-subtitle2"  size="32px">Dhaka - Barisal</div>-->
<!--      </q-card-section>-->

<!--      <q-separator class="q-ma-sm" />-->

<!--      <div class="row">-->
<!--        <div class="col">-->
<!--          <q-icon name="bed"  size="32px"/> Cabin <q-badge color="blue">12</q-badge>-->
<!--        </div>-->
<!--        <div class="col">-->
<!--          <q-icon name="chair"  size="32px"/> Seat <q-badge color="blue">25</q-badge>-->
<!--        </div>-->
<!--      </div>-->

<!--      <q-separator />-->

<!--      <q-card-actions>-->
<!--        <q-btn flat round icon="event" />-->
<!--        <q-btn flat>-->
<!--          7:30PM-->
<!--        </q-btn>-->
<!--        <q-btn outline color="primary">-->
<!--          Booking now-->
<!--        </q-btn>-->
<!--      </q-card-actions>-->
<!--    </q-card>-->
  </div>
</template>
<style scoped>
.q-item {
  padding: 0;
  border: 1px solid #E1E0E0;
}
.q-item__section--thumbnail img {
  width: 120px;
  height: 80px;
}
.q-item > .q-item__section--thumbnail:first-child, .q-item > .q-focus-helper + .q-item__section--thumbnail {
   margin-left: 0;
}
.q-item__section--main ~ .q-item__section--side {
  align-items: inherit;
}
</style>
