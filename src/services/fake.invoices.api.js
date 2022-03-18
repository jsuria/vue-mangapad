 const service = (dataOption, dataItems) => {
     return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = dataOption

        let items = dataItems
        const total = items.length

        if (sortBy.length === 1 && sortDesc.length === 1) {
            items = items.sort((a, b) => {
                const sortA = a[sortBy[0]]
                const sortB = b[sortBy[0]]

                if (sortDesc[0]) {
                    if (sortA < sortB) return 1
                    if (sortA > sortB) return -1
                    return 0
                } else {
                    if (sortA < sortB) return -1
                    if (sortA > sortB) return 1
                    return 0
                }
            })
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