import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationDemoProps {
  paginate: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}

export const PaginationDemo: React.FC<PaginationDemoProps> = ({ paginate, currentPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage === 1 ? (
            <span className="pagination-previous disabled">Previous</span>
          ) : (
            <PaginationLink href="#" onClick={() => paginate(currentPage - 1)}>
              Previous
            </PaginationLink>
          )}
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              href="#"
              className={number === currentPage ? 'is-active' : ''}
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {currentPage === totalPages ? (
            <span className="pagination-next disabled">Next</span>
          ) : (
            <PaginationLink href="#" onClick={() => paginate(currentPage + 1)}>
              Next
            </PaginationLink>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
