  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({

      regexRulesVisa: {
        required: true,
        regex: "^4[0-9]{12}(?:[0-9]{3})?$"
      },

      regexRulesMastercard: {
        required: true,
        regex: "^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$"
      },

      prefixesMasterCard: ["5","2"],
      prefixesVisa:["4"],

      cardType: 'Visa',
      
      firstName: {
        validation:{
          name: "First Name",
          rules: "required|max:10"
        },
        field:{
          counter: 10,
          label: "First Name",
          isRequired: true,
          model: null
        }
      },

      lastName: {
        validation:{
          name: "Last Name",
          rules: "required|max:10"
        },
        field:{
          counter: 10,
          label: "Last Name",
          isRequired: true,
          model: null
        }
      },

      phoneNumber: {
        validation:{
          name: "Phone Number",
          rules: {
            required: true,
            digits: 9,
            regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{7}$'
          }
        },
        field:{
          counter: 9,
          label: "Phone Number",
          isRequired: true,
          model: null
        }
      },

      email: {
        validation:{
          name: "E-mail",
          rules: "required|email"
        },
        field:{
          label: "E-mail",
          isRequired: true,
          model: null
        }
      },

      cardHolder: {
        validation:{
          name: "Card Holder",
          rules: "required|max:30"
        },
        field:{
          counter: 30,
          label: "Card Holder",
          isRequired: true,
          model: null
        }
      },

      // Visa and Mastercard only
      cardNumber: {
        validation:{
          name: "Card Number",
          rules: {
            required: true,
            digits: 12,
            regex: null
          }
        },
        field:{
          label: "Card Number",
          isRequired: true,
          model: null
        }
      },

      validThrough: {
        validation:{
          name: "Valid Through",
          rules: "required"
        },
        field:{
          label: "Valid Through",
          isRequired: true,
          items: []
        }
      },

      cvvNumber: {
        validation:{
          name: "CVV",
          rules: {
            required: true,
            digits: 3
          }
        },
        field:{
          counter: 3,
          label: "CVV",
          isRequired: true,
          model: null
        }
      },
    
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },

    computed:{
       
        cardTypeRegex(){
          return this.cardType == 'Visa' ? this.regexRulesVisa : this.regexRulesMastercard
        }
        
    }
  }
