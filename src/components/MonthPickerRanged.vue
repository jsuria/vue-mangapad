<template>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dates"
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
           v-model="dates"
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
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
</template>

<script>
  export default {
    name: 'MonthPickerRanged',
    data: () => ({
      dates: [new Date().toISOString().substr(0, 7)],
      menu: false,
    }),

    computed: {
      dateRangeText () {
        return this.dates.join(' - ')
      },
    },
  }
</script>