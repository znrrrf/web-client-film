import React from "react";

import animeCardMain from "../asset/carrousel/hallo-word-card.jpg";
import { BsAlarm, BsPlayCircle } from "react-icons/bs";

function MainAnime() {
  return (
    <div className="absolute w-full h-[600px]  flex justify-between items-center text-white  mt-14 z-10 ">
      <div className=" md:w-[50%] w-[100%] md:flex flex-row justify-center">
        <div className="md:w-[150px] w-full  flex flex-col items-center">
          <div className="h-[300px] w-[150px] overflow-hidden rounded-tl-2xl rounded-br-2xl">
            <img src={animeCardMain} className="w-full" />
          </div>
          <div className="w-auto flex justify-center">
            <button className="mx-3">save</button>
            <button className="mx-3">share</button>
          </div>
        </div>
        <div className=" ml-4 flex flex-col justify-between">
          <div>
            <div className="w-56">
              <h1 className="font-bold text-4xl">Hallo World</h1>
            </div>
            <div className="flex h-8 items-center ">
              <p>rating</p>
              <div className="rating rating-sm ml-4">
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
            <div>
              <p>Drama, Romance, Sci-fi</p>
            </div>
            <div className="flex  h-7 items-center">
              <BsAlarm />
              <p className="ml-2">1:37min</p>
            </div>
            <div>
              <ul className="list-disc ml-6">
                <li>HD-1009</li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center">
            <button className="border-2 border-white hover:bg-white hover:text-black rounded-md px-3 py-1">
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] sm:flex hidden justify-center items-center h-[600px] ">
        <BsPlayCircle className="text-8xl hover:text-9xl duration-300 bg-opacity-10 cursor-pointe " />
      </div>
    </div>
  );
}

export default MainAnime;
