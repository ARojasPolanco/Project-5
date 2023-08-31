const paginateData = (items, currentPage, itemsPerPage) => {

    const sliceEnd = currentPage * itemsPerPage
    const sliceStart = sliceEnd - itemsPerPage
    const itemsInCurrentPage = items.slice(sliceStart, sliceEnd)

    const lastPages = Math.ceil(items.length / itemsPerPage)

    const PAGE_PER_BLOCK = 5

    const actualBlock = Math.ceil(currentPage / PAGE_PER_BLOCK)

    const pagesInCurrentBlock = []
    const maxPage = actualBlock * PAGE_PER_BLOCK
    const minPage = (maxPage - PAGE_PER_BLOCK) + 1

    for (let i = minPage; i <= maxPage; i++) {
        if (i <= lastPages) {
            pagesInCurrentBlock.push(i)
        }
    }

    return {
        itemsInCurrentPage,
        lastPages,
        pagesInCurrentBlock
    }
}

export {
    paginateData
}