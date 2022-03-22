import service from "@/services/fake.invoices.api"
import jsonData from "@/services/fake.invoices.data.json"

export default {
    data () {
      return {
        totalInvoices: 0,
        search:'',
        invoices: [],
        loading: true,
        pagination: {},
        filters:[

        ],
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

    computed: {
      params(nv) {
          console.log(nv)
          return {
              ...this.pagination,
              query: this.search
          };
      }
    },

    watch: {
      // Watch for changes on the params property
      params: {
        handler() {
            this.getDataFromApi()
        },
        deep: true  // include object properties
      }
    },
    methods: {
      async getDataFromApi () {
        this.loading = true
        return this.fakeApiCall().then(data => {
          this.invoices = data.items
          this.totalInvoices = data.total
          this.loading = false
        })
      },
      /**
       * Simulated service only. Use fetch() or axios methods for real apps
       */
      async fakeApiCall () {
        return service(this.pagination, jsonData, this.search)
      },
    },

    mounted() {
      // Calling the pseudo service directly
      try {
        this.fakeApiCall().then(data => {
          this.invoices = data.items;
          this.totalInvoices = data.total;
          this.loading = false
      });
        

      } catch(err) {
          console.log(err)
      }
      
    },
  }
