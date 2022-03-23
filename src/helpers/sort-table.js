
const sortTable = (sortBy, sortDesc, items) => {
    if (sortBy.length !== 1 && sortDesc.length !== 1) {
        return items
    } else {
        return items.sort((a, b) => {
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
}

export default sortTable