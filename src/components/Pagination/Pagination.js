import React from "react";
import Pagination from "rc-pagination";
import "./Pagination.scss";

const PaginationMovie = ({ currentPage, totalItem, onChangePage }) => {
  return (
    <Pagination
      className="pagination"
      current={currentPage}
      total={totalItem}
      pageSize={20}
      onChange={onChangePage}
    />
  );
};
export default PaginationMovie;
