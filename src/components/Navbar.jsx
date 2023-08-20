import React, { useState } from "react";
import { BsSearch, BsJustify, BsFillCaretRightFill } from "react-icons/bs";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [searchButt, setSearchButt] = useState(false);
  return (
    <div className="w-full flex justify-between bg-black bg-opacity-50 text-white fixed  h-14 items-center px-5  z-20">
      <div className="flex items-center">
        <h1 className="text-yellow-300 font-bold hover:cursor-pointer">
          Home Logo
        </h1>
        <button
          className="md:hidden flex items-center justify-center ml-4 border-2 w-10 h-10 rounded-lg"
          onClick={() => setSearchButt(!searchButt)}
        >
          <BsSearch />
        </button>
      </div>
      <div className="md:block hidden ">
        <div className="py-5 w-[500px] flex justify-center items-center ">
          <input
            type="search"
            className="border-2 w-full border-gray-300 bg-transparent h-8 pl-2 pr-10 rounded-lg text-sm focus:outline-none"
            name="search"
            placeholder="Search"
          />
          <div className="absolute ml-[455px] hover:cursor-pointer">
            <BsSearch className="text-gray-400" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="md:flex hidden text-sm ">
        <button className="bg-transparent font-bold hover:text-[15px]  text-glow-yellow duration-300 w-20 h-8 rounded-md mx-1">
          Register
        </button>
        <button className="bg-transparent font-bold hover:text-[15px]  text-glow-yellow duration-300 w-20 h-8 rounded-md mx-1 ">
          Login
        </button>
      </div>
      <div className="md:hidden flex flex-col  right-2 top-2 absolute">
        <div className="flex justify-end">
          <button
            className={`${
              toggle ? "bg-white text-black" : "bg-transparent text-white"
            } border-2 rounded-lg w-10 h-10 flex justify-center items-center`}
            onClick={() => setToggle(!toggle)}
          >
            <BsJustify className="text-2xl" />
          </button>
        </div>

        <div
          className={`${
            toggle ? "duration-300 flex " : "hidden"
          }  flex-col bg-black rounded-xl text-yellow-300 font-bold text-sm bg-opacity-70 w-32 mt-3`}
        >
          <button className="my-2">Login</button>
          <button className="my-2">Register</button>
        </div>
      </div>
      <div
        className={`fixed bg-black bg-opacity-50 h-[100%] w-[100%] bottom-0 right-0 ${
          searchButt ? "md:hidden flex" : "hidden"
        }  items-center justify-center mt-[500px]`}
        onClick={(e) => {
          if (e.target.tagName.toLowerCase() === "input") {
            e.stopPropagation();
          } else {
            setSearchButt(!searchButt);
          }
        }}
      >
        <input
          placeholder="search"
          type="search"
          className="h-10 w-[180px] rounded-xl bg-gray-800 pr-2 pl-2"
        />
        <button
          className="  hover:cursor-pointer  right-20"
          onClick={(e) => {
            e.stopPropagation();
            console.log("click");
          }}
        >
          <BsFillCaretRightFill className="text-yellow-300 h-6 w-7" />
        </button>

        {/* <button onClick={() => setSearchButt(!searchButt)}>X</button> */}
      </div>
    </div>
  );
}

export default Navbar;
