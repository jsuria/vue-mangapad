<template>
    <div ref="container" /> 
 </template>  
 <script> 

/**
 * URL: https://betterprogramming.pub/how-to-incrementally-migrate-from-vue-js-2-to-react-18-part-1-setup-be2cd04458f0
 * 
 * To quickly give a breakdown of what is happening here, 
 * we are creating a React Root and assigning it to the container ref.
 * We have set inheritAttrs: false, so that the attributes are not just 
 * put on the container ref and then we pass the $attrs as props when we 
 * render the component. We also watch the $attrs and rerender the component when they change.
 * Finally, we unmount when the component is destroyed to ensure that we clean up the React application.
 * 
*/

 import { createElement } from "react"; 
 import { createRoot } from "react-dom/client";  
 export default {
    inheritAttrs: false,
    props: {
      component: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        reactRoot: null,
      };
    },
    methods: {
      updateReactComponent() {
        this.reactRoot.render(createElement(this.component, this.$attrs));
      },
    },
    mounted() {
      this.reactRoot = createRoot(this.$refs.container);     
      this.updateReactComponent();
    },
    destroyed() {
      this.reactRoot.unmount();
    },
    watch: {
      $attrs: {
        deep: true,
        handler() {
          this.updateReactComponent();
        },
      },
    },
  };
  </script>