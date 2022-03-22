<template>
  <v-card
    class="mx-auto mt-10"
    max-width="270"
    elevation="0"
  >
    <v-img
      class="white--text align-end"
      contain 
      max-height="250"
      src="/inventory/manga_1.jpg"
    >
  </v-img>

    <v-card-subtitle class="text-left">
      My Hero Academia: Volume 1
    </v-card-subtitle>

    <v-card-text class="text--primary text-left">
      <div>Yusuke Murata</div>
      <div>Shonen Jump Manga</div>
    </v-card-text>

    <v-card-text class="text--primary text-left">
      <div>ONL-MNG-0001</div>
      <div>USD 25.00</div>
    </v-card-text>

  </v-card>
</template>

<script>
  export default {
      name: 'CheckoutItem'
  }
</script>