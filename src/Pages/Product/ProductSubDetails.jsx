import React, { useEffect } from "react";
import HomeHeader from "../Home/HomeHeader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";

export default function ProductSubDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetch.data);
  
  const ProductSubDetails = data ? [data.find((item) => item.id === Number(id))] : [];

  useEffect(() => {
    if (!data) { 
      dispatch(fetchAction("https://jsonplaceholder.typicode.com/photos", {
      method: 'Get'
      })); 
    }
  }, [dispatch]); 
    

  return (
    <div className="grid grid-rows-10">
        <div className="row-span-1"><HomeHeader/></div>
        <div className="row-span-1">
            <div className="grid grid-cols-5">
            
            </div>
        </div>
        <div className="row-span-1"><HomeHeader/></div>

        
    </div>
   
 );
}
