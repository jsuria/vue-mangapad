<template>
  <div>
        <ContactUs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactUs from '@/components/ContactUs.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    ContactUs,
  },
});
</script>
