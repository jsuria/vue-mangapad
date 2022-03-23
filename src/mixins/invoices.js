import { mapActions, mapGetters } from "vuex"

export default {
    data () {
      return {
        totalInvoices: 0,
        search:'',
        invoices: [],
        loading: true,
        pagination: {},
       
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
      ...mapGetters(["invoicesList","invoicesLoading","invoicesTotal"]),

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
            this.doSearch()
        },
        deep: true  // include object properties
      }
    },
    methods: {
      ...mapActions(["searchKeywords","loadInvoices"]),
      async doSearch() {
        await this.searchKeywords({
          options: this.pagination, 
          search: this.search
        })
      }
    },

    mounted() {
      // Calling the pseudo service directly
      this.loadInvoices(this.pagination)
      
    },
  }
