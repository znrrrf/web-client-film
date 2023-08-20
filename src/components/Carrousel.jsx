import React from "react";
import mainImage from "../asset/carrousel/banner-hallo-world.jpg";
import Navbar from "./Navbar";
import MainAnime from "./MainAnime";

function Carrousel() {
  return (
    <div className=" h-[600px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-radial">
        <Navbar />
      </div>

      <div>
        <MainAnime />
      </div>
      <div className="overflow-hidden flex justify-center">
        <img src={mainImage} className="sm:w-screen min-w-[1200px] h-[700px]" />
        {/* <img src={mainImage} className=" aspect-auto w-auto h-[600px]" /> */}
      </div>
    </div>
  );
}

export default Carrousel;
