import React, { useEffect, useState } from "react";
import Sidenav from "../partials/Sidenav";
import Topnav from "../partials/Topnav";
import HorizontalCard from "../partials/HorizontalCard";
import axios from "../utils/axios";
import Loading from "../partials/Loading";

function Home() {
  const [tranding, setTranding] = useState(null);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const data = await axios.get("", {
          params: {
            s: "trending",
          },
        });
        setTranding(data.data.Search || []);
      } catch (error) {
        console.log(error);
      }
    };

    getSearch();
  }, []);


  return tranding  ?  (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <HorizontalCard  data={tranding} />
      </div>
    </>
  )   : <Loading />
}

export default Home;
