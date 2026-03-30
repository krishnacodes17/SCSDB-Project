import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards'
import axios from "../utils/axios"
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './Topnav'



function Popular() {
   const navigate = useNavigate()

  const [tranding, setTranding] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchIndex, setSearchIndex] = useState(0);
  
  const searchKeywords = ["popular", "hindi", "popular", "marvel", "superhero", "adventure"];

  const getSearch = async (pageNum = 1, searchIdx = searchIndex) => {
    try {
      const currentKeyword = searchKeywords[searchIdx];
      const data = await axios.get("", {
        params: {
          s: currentKeyword,
          page: pageNum,
        },
      });
      
      const newData = data.data.Search || [];
      
      if (pageNum === 1) {
        setTranding(newData);
      } else {
        setTranding((prev) => [...prev, ...newData]);
      }

      if (newData.length < 10) {
        if (searchIdx + 1 < searchKeywords.length) {
          setSearchIndex(searchIdx + 1);
          setPage(1);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      } else {
        setPage(pageNum);
        setHasMore(true);
      }

    } catch (error) {
      console.log(error);
      setHasMore(false);
    }
  };

  useEffect(() => {
    getSearch(1, 0);
  }, []);

  const handleNextPage = () => {
    getSearch(page + 1, searchIndex);
  };

  return (
    <div className='w-full h-screen overflow-hidden bg-zinc-950'>
      <div className='flex text-center items-center px-10 py-4 border-b border-zinc-800'>
        <i onClick={()=> navigate("/")} className="ri-arrow-left-long-fill pt-2 text-white text-3xl"></i>
        <h1 className='text-2xl text-zinc-100 pl-4 font-bold'>
          {searchKeywords[searchIndex].charAt(0).toUpperCase() + searchKeywords[searchIndex].slice(1)}
        </h1>
        <Topnav />
      </div>
      <div id='scroll-container' className='w-full h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden'>
        
        <InfiniteScroll 
        scrollableTarget='scroll-container'
        hasMore={hasMore}
        dataLength={tranding?.length || 0}
        next={handleNextPage}
          loader={<h4 className="text-white text-center p-4">Loading more...</h4>}
          endMessage={<h4 className="text-white text-center p-4">No more movies! 🍿</h4>}
        >
        <Cards data={tranding} />
        </InfiniteScroll>
      </div>
    </div>
  )

}

export default Popular
