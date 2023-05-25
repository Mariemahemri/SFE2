import React from "react";
import Navbar from "../../Components/navbar/navbar";
import Header from "../../Components/Header/header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/usefetch";
import SearchItemF from "../../Components/FlightItems/Fitems";


const ListF =()=>{
    const location=useLocation();
    const[origin,setOrigin]=useState(location.state.origin);
    const[destination,setDestination]=useState(location.state.destination);

     const { data, loading, error, reFetch } = useFetch(
    `/flights?origin=${origin}&destination=${destination}`
    );
    const handleClick = () => {
    reFetch();
  };

  return(
    <div>
        <Navbar />
        <Header type="list"/>
        <div className="FlightContainer">
             <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItemF item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
    </div>
  )

}
export default ListF;