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
        <ul className="flex justify-center items-center gap-4 p-4">
            {currentPage >= 2 && <li onClick={handleFirstPage}>{'<<'}</li>}
            {currentPage >= 2 && <li onClick={handlePreviusPage}>{'<'}</li>}
            {
                pagesInCurrentBlock.map((page) => <li className={`p-2 ${currentPage === page ? 'text-white bg-red-pokeball' : ''}`} key={page} onClick={(() => setCurrentPage(page))}>{page}</li>)
            }
            <li onClick={handleNextPage}>{'>'}</li>
            <li onClick={handleLastPage}>{'>>'}</li>
        </ul>
    )
}

export default Pagination