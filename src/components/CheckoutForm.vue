<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <!-- FIRST NAME -->
      <validation-provider
        v-slot="{ errors }"
        :name="firstName.validation.name"
        :rules="firstName.validation.rules"
      >
        <v-text-field
          v-model="firstName.field.model"
          :counter="firstName.field.counter"
          :error-messages="errors"
          :label="firstName.field.label"
          :required="firstName.field.isRequired"
        ></v-text-field>
      </validation-provider>
      
      <!-- LAST NAME -->
      <validation-provider
        v-slot="{ errors }"
        :name="lastName.validation.name"
        :rules="lastName.validation.rules"
      >
        <v-text-field
          v-model="lastName.field.model"
          :counter="lastName.field.counter"
          :error-messages="errors"
          :label="lastName.field.label"
          :required="lastName.field.isRequired"
        ></v-text-field>
      </validation-provider>
      
      <!-- PHONE NUMBER -->
      <validation-provider
        v-slot="{ errors }"
        :name="phoneNumber.validation.name"
        :rules="phoneNumber.validation.rules"
      >
        <v-text-field
          v-model="phoneNumber.field.model"
          :counter="phoneNumber.field.counter"
          :error-messages="errors"
          :label="phoneNumber.field.label"
          :required="phoneNumber.field.isRequired"
        ></v-text-field>
      </validation-provider>
      
      <!-- EMAIL -->
      <validation-provider
        v-slot="{ errors }"
        :name="email.validation.name"
        :rules="email.validation.rules"
      >
        <v-text-field
          v-model="email.field.model"
          :error-messages="errors"
          :label="email.field.label"
          :required="email.field.isRequired"
        ></v-text-field>
      </validation-provider>
      
      <!-- CARD HOLDER -->
      <validation-provider
        v-slot="{ errors }"
        :name="cardHolder.validation.name"
        :rules="cardHolder.validation.rules"
      >
        <v-text-field
          v-model="cardHolder.field.model"
          :counter="cardHolder.field.counter"
          :error-messages="errors"
          :label="cardHolder.field.label"
          :required="cardHolder.field.isRequired"
        ></v-text-field>
      </validation-provider>

      <!-- CARD NUMBER -->
      <validation-provider
        v-slot="{ errors }"
        :name="cardNumber.validation.name"
        :rules="cardNumber.validation.rules"
      >
        <v-text-field
          v-model="cardNumber.field.model"
          :error-messages="errors"
          :label="cardNumber.field.label"
          :required="cardNumber.field.label"
        ></v-text-field>
      </validation-provider>

       <!-- CVV NUMBER -->
      <validation-provider
        v-slot="{ errors }"
        :name="cvvNumber.validation.name"
        :rules="cvvNumber.validation.rules"
      >
        <v-text-field
          v-model="cvvNumber.field.model"
          :error-messages="errors"
          :label="cvvNumber.field.label"
          :required="cvvNumber.field.label"
        ></v-text-field>
      </validation-provider>

      <!-- <MonthPicker></MonthPicker> -->

      <!--  
        <validation-provider
            v-slot="{ errors }"
            name="select"
            rules="required"
        >
        <v-select
          v-model="select"
          :items="items"
          :error-messages="errors"
          label="Select"
          data-vv-name="select"
          required
        ></v-select>
        </validation-provider>
      -->
      
      <!-- 
        <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="checkbox"
        >
            <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Option"
            type="checkbox"
            required
            ></v-checkbox>
        </validation-provider> 
      -->

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import checkoutform from '@/mixins/checkoutform'
//import MonthPicker from './MonthPicker.vue'

export default {
    //components: { Monthpicker },
    mixins: [checkoutform]
}
</script>