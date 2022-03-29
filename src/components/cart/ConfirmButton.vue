<template>
  <div>
    <div class="justify-center vertical-middle">
      <q-btn color="primary" class="full-width" @click="handleConfirm($event, step)">Confirm</q-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: ['step'],
  methods: {
    handleConfirm(e, step) {
      alert(step)
    }
  }
}
</script>
