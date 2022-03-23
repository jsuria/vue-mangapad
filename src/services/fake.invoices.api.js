import sortTable from "@/helpers/sort-table"

const service = (dataOption, dataItems, dataSearch) => {
     return new Promise((resolve) => {
        const { 
            sortBy, 
            sortDesc, 
            page, 
            itemsPerPage } = dataOption

        let search = null
        
        try {
            search = dataSearch.trim().toLowerCase()
        } catch(err) {
            console.log(err)
            search = false
        }
        
        let items = dataItems
        let total = items.length

        if(search){
            // Keyword search            
            let matches = items.filter(item => {
                return Object.values(item)
                    .join(",")
                    .toLowerCase()
                    .includes(search);
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
        }, 1000)
    })
 }   

export default service