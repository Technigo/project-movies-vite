import Button from "./ui/Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // Max number of page buttons to show
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);

    if (endPage - startPage < maxPageNumbers - 1) {
      startPage = Math.max(endPage - maxPageNumbers + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Button
        type="button"
        variant="secondary"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="disabled:hidden"
      >
        First
      </Button>

      <Button
        type="button"
        variant="secondary"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:cursor-not-allowed"
      >
        Previous
      </Button>

      {pageNumbers[0] > 1 && <span>...</span>}

      {pageNumbers.map((number) => (
        <Button
          type="button"
          variant="secondary"
          key={number}
          onClick={() => onPageChange(number)}
          isSelected={number === currentPage}
          disabled={number === currentPage}
        >
          {number}
        </Button>
      ))}

      {pageNumbers[pageNumbers.length - 1] < totalPages && <span>...</span>}

      <Button
        type="button"
        variant="secondary"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:cursor-not-allowed"
      >
        Next
      </Button>

      <Button
        type="button"
        variant="secondary"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="disabled:hidden"
      >
        Last
      </Button>
    </div>
  );
};

export default Pagination;
