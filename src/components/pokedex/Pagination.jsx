const FIRST_PAGE = 1
const Pagination = ({ lastPages, pagesInCurrentBlock, setCurrentPage, currentPage }) => {

    const handleNextPage = () => {
        setCurrentPage((prevState) => {
            const nextPage = prevState + 1
            if (nextPage <= lastPages) return nextPage
            return prevState
        })
    }

    const handleLastPage = () => setCurrentPage(lastPages)

    const handlePreviusPage = () => {
        setCurrentPage((prevPage) => {
            const newPage = prevPage - 1
            if (newPage >= FIRST_PAGE) return newPage
            return prevPage
        })
    }

    const handleFirstPage = () => setCurrentPage(FIRST_PAGE)

    return (
        <ul className="flex justify-center items-center p-4 gap-1">
            {currentPage >= 2 && <li onClick={handleFirstPage}><i className='bx bx-chevrons-left cursor-pointer'></i></li>}
            {currentPage >= 2 && <li onClick={handlePreviusPage}><i className='bx bx-chevron-left cursor-pointer'></i></li>}
            {
                pagesInCurrentBlock.map((page) => <li className={`cursor-pointer hover:bg-black hover:text-white hover:dark:bg-special-dark-blue p-4 h-6 rounded-full aspect-square flex justify-center items-center transition-colors ${currentPage === page ? 'text-white bg-black dark:bg-special-dark-blue' : ''}`} key={page} onClick={(() => setCurrentPage(page))}>{page}</li>)
            }
            {currentPage <= lastPages - FIRST_PAGE && <li onClick={handleNextPage}><i className='bx bx-chevron-right cursor-pointer'></i></li>}

            {currentPage <= lastPages - FIRST_PAGE && <li onClick={handleLastPage}><i className='bx bx-chevrons-right cursor-pointer'></i></li>}
        </ul>
    )
}

export default Pagination