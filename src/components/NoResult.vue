<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>{{ msg || 'No results found' }}</q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>
