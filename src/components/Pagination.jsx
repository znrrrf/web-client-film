import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { allAnime } from "../Datas/AnimeData";

function Pagination(props) {
  console.log(props);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={props.handlePageClick}
      pageRangeDisplayed={5}
      pageCount={props.pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName=" flex justify-center items-center gap-2  w-[500px]"
      pageClassName=" w-10 h-10 flex justify-center items-center rounded-lg  hover:text-black hover:bg-yellow-300 hover:cursor-pointer"
      previousClassName=" w-10 h-10 flex justify-center rounded-lg text-yellow-300 hover:text-black hover:bg-yellow-300 hover:cursor-pointer"
      nextClassName=" w-10 h-10 flex justify-center rounded-lg text-yellow-300 hover:text-black hover:bg-yellow-300 hover:cursor-pointer"
      activeClassName="bg-yellow-300 text-black hover:cursor-pointer"
    />
  );
}

export default Pagination;
