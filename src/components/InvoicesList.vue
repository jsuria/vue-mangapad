<template>
      <div>
        <div class="text-h5 text-left ml-10 mt-10">Invoices</div>
        <div class="d-flex mx-10 mt-8 mb-3">
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search by Receipt Code"
              hide-details
              class="flex-grow-1 mr-5"
          ></v-text-field>
          <MonthPickerRanged
            :class="'flex-grow-1'"
          ></MonthPickerRanged>
        </div>

        <v-data-table
          :headers="headers"
          :items="invoicesList"
          :options.sync="pagination"
          :server-items-length="invoicesTotal"
          :loading="invoicesLoading"
          class="elevation-0 mx-10 mt-4"
        >
          <!-- eslint-disable -->
          <template 
            v-for="header in headers.filter((header) =>
                    header.hasOwnProperty('formatter')
              )"
            v-slot:[`item.${header.value}`]="{ header,value }">

              <span>{{ header.formatter(value) }}</span>
          </template>
          <!--eslint-enable-->
        
        </v-data-table>
      </div>
    
    
</template>

<script>
import MonthPickerRanged from '@/components/MonthPickerRanged.vue'
import invoices from '@/mixins/invoices'

export default {
    mixins: [invoices],
    components: {
      MonthPickerRanged
    }
}
</script>