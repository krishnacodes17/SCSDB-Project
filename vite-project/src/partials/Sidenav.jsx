import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function Sidenav() {



  return (
    <>
      <div className="w-[20%] h-full border-r-2 p-10 border-zinc-400 ">
        <h1 className="text-2xl text-white font-bold">
          <i class="ri-tv-fill text-[#6556CD] mr-2"></i>
          <span className="text-2xl "> SCSDB</span>
        </h1>
        <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
          <h1 className="text-white font-bold text-xl mb-5 mt-10">New Feeds</h1>
          <Link to="/trending" className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class="mr-2 ri-fire-fill"></i> Trending
          </Link>
          <Link className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class=" mr-2 ri-bard-fill"></i> Poplar
          </Link>
          <Link className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class=" mr-2 ri-movie-2-fill"></i> Movies
          </Link>
          <Link className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class=" mr-2 ri-tv-2-fill"></i> Tv shows
          </Link>
          <Link className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class=" mr-2 ri-team-fill"></i> People
          </Link>
        </nav>


        <hr className="border-none text-zinc-400 h-[1px] " />


        <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
          <h1 className="text-white font-bold text-xl mb-5 mt-10">Website information</h1>
         
          <Link className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class=" mr-2 ri-information-fill"></i> About SCSBD
          </Link>
          <Link className="hover:bg-[#6556CD] p-5 hover:text-white duration-300 rounded-lg ">
            {" "}
            <i class=" mr-2 ri-phone-fill"></i> Contact Us
          </Link>

        </nav>
      </div>
    </>
  );
}

export default Sidenav;
