import React from 'react'
import ReactPaginate from 'react-paginate';
const PaginationCom = ({getPage , pageCount }) => {
const handlePageClick = (data)=>{
  getPage(data.selected+1)
}

  return (
    <div>
          <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        previousLabel = "السابق"
        onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    marginPagesDisplayed={2}
    pageCount = {pageCount}
    breakClassName = {"page-item"}
    breakLinkClassName = {"page-link"}
    containerClassName = {"pagination d-flex justify-content-center"}
    pageClassName = {"page-item"}
    pageLinkClassName = {"page-link"}
    previousClassName = {"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName = {"page-link"}
    activeClassName={"active"}
      />
    </div>
  )
}

export default PaginationCom
