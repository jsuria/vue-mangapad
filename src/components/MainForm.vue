<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Checkout Form</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <CheckoutForm></CheckoutForm>
                </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import CheckoutForm from '@/components/CheckoutForm'

  export default {
    name: "main-form",

    data: () => ({
      drawer: null
    }),
    components:{
        CheckoutForm
    },
    props: {
      source: String
    }
  }
</script>