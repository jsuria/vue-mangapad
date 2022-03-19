<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="invoices"
      :options.sync="options"
      :server-items-length="totalInvoices"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import invoices from '@/mixins/invoices'

export default {
    mixins: [invoices]
}
</script>