import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNo) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNo);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  // if there is only page
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {/* PREV */}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) return;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>

        {/* PAGE NUMBERS */}
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            const nextPage = page + 1;
            if (nextPage > pageCount) return;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer;
