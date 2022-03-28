<template>
  <div>
    <q-table
      title=""
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-header
      hide-bottom
    />
  </div>
</template>
<script>
import {mapState} from "vuex";
const columns = [
  {
    name: 'name',
    required: true,
    label: '',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: false
  },
  {
    name: 'amount',
    required: true,
    label: '',
    align: 'right',
    field: row => row.name,
    format: val => `${val}`,
    sortable: false
  },
]
const rows = [
  {
    name: 'Total',
    amount: 500
  },
  {
    name: 'Total',
    amount: 'Hello'
  }
]

export default {
  setup () {
    return {
      columns,
      rows: rows
    }
  },
  computed: {
    ...mapState('general', ['cart'])
  }
}
</script>
