import sortTable from "@/helpers/sort-table"

const serviceDateSearch = (dataOption, dataItems, dataSearch) => {
    return new Promise((resolve) => {
       const { 
           sortBy, 
           sortDesc, 
           page, 
           itemsPerPage } = dataOption

       let search = null

       try {
            search = dataSearch.trim().toLowerCase()  
       } catch(e) {
            search = ""
       }

       let items = dataItems

       // Init value, may change after search
       let total = items.length

        if(search.indexOf('~') > -1){   
            // Split the date range
            const ranges = search.split('~'),
                    dateStart = new Date(ranges[0].trim()),
                    dateEnd = new Date(ranges[1].trim())

            //Date range search
            let matches = items.filter(item => {

                // Get paid_at column
                let dateCol = new Date(item.paid_at)

                // Compaare using getTime()
                return (dateCol.getTime() >= dateStart.getTime())
                        &&
                        (dateCol.getTime() <= dateEnd.getTime())

            });

            total = matches.length
            items = sortTable(sortBy, sortDesc, matches)
        } else {
            items = sortTable(sortBy, sortDesc, items)
        }

        if (itemsPerPage > 0) {
            items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        }

       setTimeout(() => {
           resolve({
               items,
               total,
           })
       }, 2000)
   })
}   

export default serviceDateSearch