<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <div class="text-h5 text-left ml-2 mt-10">Checkout Form</div>
    <form @submit.prevent="submit" class="mt-5 mb-15">
 
          <div class="d-flex flex-row">
            <!-- FIRST NAME -->
            <validation-provider
              class="pa-2 flex-grow-1"
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
                class="pa-2 flex-grow-1"
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
          </div>
     
         <div class="d-flex flex-row">
             <!-- EMAIL -->
              <validation-provider
                class="pa-2 flex-grow-1"
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
        
            <!-- PHONE NUMBER -->
            <validation-provider
              class="pa-2 flex-grow-1"
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
          </div>
       

        <div class="d-flex flex-row">
            <!-- CARD HOLDER -->
            <validation-provider
              class="pa-2 flex-grow-1"
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
          </div>

          <div class="d-flex flex-row">

            <div class="pa-2 flex-shrink-1">
              <v-select
                  v-model="cardType"
                  label="Card Type"
                  :items="['Visa','Mastercard']"
              ></v-select>
            </div>
            
            <!-- CARD NUMBER -->
            <validation-provider
              class="pa-2 flex-grow-1"
              v-slot="{ errors }"
              :name="cardNumber.validation.name"
              :rules="cardTypeRegex"
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
              class="pa-2 flex-shrink-1"
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

            <div class="pa-2 flex-shrink-1">
                <MonthPicker></MonthPicker>
            </div> 
          </div>
          
          <div class="d-flex flex-row">
            <v-btn
              class="mr-4"
              type="submit"
              :disabled="invalid"
            >  submit
            </v-btn>
      
            <v-btn @click="clear">
                clear
            </v-btn>
          </div>

          <!-- <MonthPicker></MonthPicker> -->
  
    </form>
  </validation-observer>
</template>

<script>
import checkoutform from '@/mixins/checkoutform'
import MonthPicker from '@/components/MonthPicker.vue'

export default {
    components: { MonthPicker },
    mixins: [checkoutform]
}
</script>