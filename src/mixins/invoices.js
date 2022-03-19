import service from "@/services/fake.invoices.api"
import data from "@/services/fake.invoices.data.json"

export default {
    data () {
      return {
        totalInvoices: 0,
        invoices: [],
        loading: true,
        options: {},
        headers: [
          {
            text: 'Receipt Code',
            align: 'start',
            sortable: true,
            value: 'receipt_code',
          },
          {
            text: 'Paid At',
            sortable: true,
            value: 'paid_at',
          },

          {
            text: 'Amount',
            sortable: true,
            value: 'amount',
          },
        ],
      }
    },
    watch: {
      options: {
        handler () {
          this.getDataFromApi()
        },
        deep: true,
      },
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        this.fakeApiCall().then(data => {
          this.invoices = data.items
          this.totalInvoices = data.total
          this.loading = false
        })
      },
      /**
       * In a real application this would be a call to fetch() or axios.get()
       */
      fakeApiCall () {
        
        return service(this.options, data)
    
      },
      

    },
  }
