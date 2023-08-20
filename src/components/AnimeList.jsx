import React, { useState } from "react";
import { allAnime } from "../Datas/AnimeData";
import { BsAlarm } from "react-icons/bs";
import Pagination from "./Pagination";
import { Stack } from "@mui/material";

function AnimeList() {
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(1);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allAnime.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(allAnime.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allAnime.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="w-[100%]  flex flex-col items-center text-white ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-cols-1 md:gap-9 lg:gap-14 gap-5 w-fit mt-10">
        {currentItems?.map((el, index) => {
          return (
            <div
              key={index}
              className="h-auto w-[200px] rounded-tl-2xl rounded-b-2xl overflow-hidden hover:cursor-pointer hover:bg-slate-800"
            >
              <div className="rounded-br-2xl h-[250px] overflow-hidden">
                <img src={el.pic} className="w-[200px]" />
              </div>
              <div className="p-2 flex flex-col">
                <h3 className="font-bold">{el.name}</h3>
                <p>{el.genre}</p>
                <div className="flex items-center">
                  <BsAlarm />
                  <p className="">1:37min</p>
                </div>
                <p>{el.resolution}</p>
                <div className="flex h-[25px] items-center">
                  <p>rating</p>
                  <div className="rating rating-sm ml-2">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-yellow-300"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-yellow-300"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-yellow-300"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-yellow-300"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-yellow-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center text-2xl mt-10">
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
}

export default AnimeList;
