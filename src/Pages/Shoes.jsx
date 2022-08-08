import React from "react";
import Filter from "../Components/Filter";
import styled from "styled-components";
import {useSearchParams} from "react-router-dom"
import {useLocation,Link} from "react-router-dom"
import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getShoes } from "../Redux/AppReducer/action";

const Shoes = () => {

  const shoes=useSelector((store)=>store.AppReducer.shoes)
  const dispatch=useDispatch()
  const [param]=useSearchParams()
  const location=useLocation()



  useEffect(()=>{
    if( location||shoes.length===0){
      const sortBy=param.get("sortBy")


 const queryParams={
  params:{
    category:param.getAll("category"),
    _sort:sortBy && "name",
    _order:sortBy

  }
 }
 
 dispatch(getShoes(queryParams))
}

    },[location.search])

  return (
    <div> 
 <Filter />    
    <div>



        {/* Map through the watch list here using WatchCard Component */}
        {shoes.length>0 &&shoes.map((data)=>(
        <ShoessWrapper>
          <Link to={`/shoes/${data.id}`}>
          <div><img src={data.image } alt="" />
          <h3>{data.name}</h3>
          <h3>{data.category}</h3>
         </div>
        </Link>
       </ShoessWrapper>

      ))}
      </div>
    </div>


  );
};

export default Shoes;


const ShoessWrapper=styled.div`
display:grid;
justify-content:center;
grid-gap:10px;
`

