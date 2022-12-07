<template>
  <div className="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p> -->

    <div>
       <!-- <react-wrapper
         :component="HelloWorldComponent"
         title="Well Hello there"
         :respondFunction="respondFunction"
       /> -->
       <react-wrapper
         :component="ContactUsComponent"
       />
     </div>
   
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import { HelloWorld } from '@/react-migration/src/components/HelloWorld';
import { ContactUs } from '@/react-migration/src/components/ContactUs';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  computed:{
    /* HelloWorldComponent() {
      return HelloWorld
    }, */

    ContactUsComponent() {
      return ContactUs
    }
  },

  methods:{
    respondFunction(){
      alert("You clicked me, you filth!")
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
