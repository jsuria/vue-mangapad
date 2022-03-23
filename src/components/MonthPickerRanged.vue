<template>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dateRangeText"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateRangeText"
            label="Display all transactions within Month Range"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
           v-model="dateMonthRange"
              type="month"
              no-title
              scrollable
              range
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(dateMonthRange)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
</template>

<script>
  import { mapActions, mapGetters } from "vuex"

  export default {
    name: 'MonthPickerRanged',
    data: () => ({
      dateMonthRange: [],
      menu: false,
    }),

    computed: {
      ...mapGetters(["pageOptions"]),

      pagination:{
        get: function(){
          return this.pageOptions
        }
      },

      dateRangeText:{
        get: function () {
          try {
            return this.dateMonthRange.join(' ~ ')
          } catch(err) {
            return ''
          }
        },
        set: function (newValue) {
          try {
            console.log(newValue)
            this.dateMonthRange = newValue
          } catch(err) {
            this.dateMonthRange = []
          }
        }

      },

      params(nv) {
          console.log(nv)
          return {
              ...this.pagination,
              query: this.dateRangeText
          };
      }
    },

    watch: {
      // Watch for changes on the params property
      params: {
        handler() {
            this.doDateRangeSearch()
        },
        deep: true  // include object properties
      }
    },

    methods:{
      ...mapActions(["searchDateRange"]),
      async doDateRangeSearch(){

        await this.searchDateRange({
          options: this.pagination,
          search: this.dateRangeText
        })
      }
    }
  }
</script>