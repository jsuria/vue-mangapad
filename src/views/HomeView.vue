<template>
  <div className="home">
    <MainForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MainForm from '@/components/MainForm.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    MainForm,
  },
});
</script>
