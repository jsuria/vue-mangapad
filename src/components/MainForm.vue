<template>
     <div class="d-flex flex-row justify-center py-4">
        <CheckoutForm 
            class="flex-grow-1 mx-15"
        ></CheckoutForm>
        <CheckoutItem
            class="flex-grow-1 mx-15 pr-10"
        ></CheckoutItem>    
    </div>
</template>

<script>
  import CheckoutForm from '@/components/CheckoutForm'
import CheckoutItem from './CheckoutItem.vue'

  export default {
    name: "main-form",

    data: () => ({
      drawer: null
    }),
    components:{
        CheckoutForm,
        CheckoutItem
    },
    props: {
      source: String
    }
  }
</script>