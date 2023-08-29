const paginateData = (items, currentPage) => {
    const ITEMS_PER_PAGE = 20

    const sliceEnd = currentPage * ITEMS_PER_PAGE
    const sliceStart = sliceEnd - ITEMS_PER_PAGE
    const itemsInCurrentPage = items.slice(sliceStart, sliceEnd)

    const lastPages = Math.ceil(items.length / ITEMS_PER_PAGE)

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