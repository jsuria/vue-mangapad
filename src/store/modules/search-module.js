import service from "@/services/fake.invoices.api"
import service_datesearch from "@/services/fake.invoices.datesearch.api";
import jsonData from "@/services/fake.invoices.data.json"

const state = { 
    invoices: [],
    totalInvoices: 0,
    paginationOptions: {},
    queryLoadiing: false
};

const getters = { 
    invoicesList: state => state.invoices,
    invoicesTotal: state => state.totalInvoices,
    invoicesLoading: state => state.queryLoadiing,
    pageOptions: state => state.paginationOptions
};

const actions = { 

    async loadInvoices({commit}, dataOptions){  
        commit("initPagination", dataOptions)
        commit("loadingToggle", true)
        await service(dataOptions, jsonData, '').then(data => {
            commit("invoiceAll",{
                inv: data.items,
                ttl: data.total
            })
            commit("loadingToggle", false)
        })
    },

    async searchKeywords({commit}, dataVars){  
        commit("loadingToggle", true)
       
        await service(dataVars.options, jsonData, dataVars.search).then(data => {
            commit("textSearch",{
                inv: data.items,
                ttl: data.total
            })    
        })
        commit("loadingToggle", false)
    },

    async searchDateRange({commit}, dataVars){  
        commit("loadingToggle", true)
        await service_datesearch(dataVars.options, jsonData, dataVars.search).then(data => {
          commit("dateSearch",{
             inv: data.items,
             ttl: data.total
          })    
        })
        commit("loadingToggle", false)
    },
   
};
const mutations = { 

    loadingToggle: (state, status) => {
        state.queryLoadiing = status
    },

    initPagination:(state, options) => {
        state.paginationOptions = options
    },

    invoiceAll: (state, results) => (
        state.invoices = results.inv,
        state.totalInvoices = results.ttl
    ),

    textSearch: (state, results) => (
        state.invoices = results.inv,
        state.totalInvoices = results.ttl
    ),

    dateSearch: (state, results) => (
        state.invoices = results.inv,
        state.totalInvoices = results.ttl
    ),    
};

export default {
    state,
    getters,
    actions,
    mutations
}