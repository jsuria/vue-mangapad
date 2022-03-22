<template>
    <div class="flex">
        <CheckoutForm 
            class="flex-grow-1"
        ></CheckoutForm>
        <CheckoutItem
            class="flex-grow-1"
        ></CheckoutItem>    
    </div>
</template>

<script>
// @ is an alias to /src
import CheckoutForm from '@/components/CheckoutForm.vue'
import CheckoutItem from '@/components/CheckoutItem.vue'

export default {
  name: 'CheckoutView',
  components: {
    CheckoutForm,
    CheckoutItem
  }
}
</script>
