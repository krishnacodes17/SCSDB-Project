import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

function Topnav() {

  const [query ,setQuery]  =useState("")
  const [search , setSearch] = useState(null)

  useEffect(() => {
    if (query.length === 0) return;
    
    // Timer set karo - 3 seconds baad API call hoga
    const timer = setTimeout(() => {
      const getSearch = async () => {
        try {
          const data = await axios.get("", {
            params: {
              s: query
            }
          });
          setSearch(data.data.Search || [])
          console.log(data.data)
        } catch (error) {
          console.log(error);
        }
      };
      
      getSearch()
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup - purana timer cancel karo
    return () => clearTimeout(timer);
    
  }, [query]);


  return (
    <>
      <div className="h-[20vh] w-full relative flex items-center justify-start ml-[15%] ">
        <i class="text-zinc-400 text-3xl ri-search-line"></i>
        <input
        onChange={(e)=> setQuery(e.target.value)}
        value={query}
          className="bg-transparent text-zinc-100 rounded-2xl outline-none w-[30%] mx-10 p-5 text-xl"
          type="text"
          placeholder="search anything"
        />

        {query.length > 0 && <i onClick={()=> setQuery("")} class="text-zinc-400 text-3xl ri-close-line"></i> }
        

        <div className="absolute w-[50%] max-h-[50vh] overflow-auto bg-zinc-200 top-[90%] rounded ">

          {/* {search?.map((data,index)=>{
          <Link key={index} className="p-10 boreder- hover:bg-zinc-300 duration-200 hover:text-semibold hover:text-zinc-900 text-zinc-600 w-[100%]  flex justify-start items-center border-2 border-zinc-100 font-semibold" >
            <img src="" alt="" />
            <span>{data.Title}</span>
          </Link>             
          })} */}


          


        </div>

      </div>
    </>
  );
}

export default Topnav;
