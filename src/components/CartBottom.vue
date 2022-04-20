<template>
  <div class="q-mt-lg">
    <q-table
      title=""
      :rows="getRows"
      :columns="columns"
      row-key="name"
      hide-header
      hide-bottom
    />
  </div>
</template>
<script>
import {mapGetters, mapState} from "vuex";
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
    field: row => row.amount,
    format: val => `${val}`,
    sortable: false
  },
]

export default {
  setup () {
    return {
      columns
    }
  },
  computed: {
    getRows() {
      let rows = []
      return [
        {
          name: 'Sub-total',
          amount: this.getSubTotal
        },
        {
          name: 'Vat',
          amount: this.getVatTotal
        },
        {
          name: 'Service charge',
          amount: this.getServiceCharge
        },
        {
          name: 'Total',
          amount: this.getTotal
        }
      ]
    },
    ...mapState('general', ['cart', 'coupon']),
    ...mapGetters('general', ['getSubTotal', 'getVatTotal', 'getServiceCharge', 'getTotal'])
  }
}
</script>
