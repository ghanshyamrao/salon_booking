const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []
  
  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  } else {
    if (currentPage <= 2) {
      pageNumbers.push(1, 2, 3, 4)
    } else if (currentPage >= totalPages - 1) {
      pageNumbers.push(totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
    } else {
      pageNumbers.push(currentPage - 1, currentPage, currentPage + 1, currentPage + 2)
    }
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 mt-6 sm:mt-10 mb-4 overflow-x-auto">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-2 sm:px-3 py-2 border-none cursor-pointer border-gray-300 rounded-md hover:bg-gray-50 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700"
      >
        ← Prev
      </button>
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`px-3 sm:px-4 py-2 rounded-md h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center cursor-pointer text-xs sm:text-sm font-medium transition-colors ${
            currentPage === pageNum
              ? 'bg-[#B56584] text-white shadow-sm'
              : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
          }`}
        >
          {pageNum}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-3 py-2 border-none cursor-pointer border-gray-300 rounded-md hover:bg-gray-50 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700"
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination

