import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { setOngoingCurrentPage, setOngoingItemsPerPage } from "../../Redux/Actions/paginationActions";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.fetch);
    
    // const { ongoingCurrentPage, ongoingItemsPerPage } = useSelector((state) => state.pagination);

    // const startOngoingIndex = (ongoingCurrentPage - 1) * ongoingItemsPerPage;
    // const endOngoingIndex = ongoingCurrentPage * ongoingItemsPerPage;
  
    // const displayedOngoingData = data && data.slice(startOngoingIndex, endOngoingIndex);
  
    // const handleOngoingPageChange = (page) => {
    //   dispatch(setOngoingCurrentPage(page)); 
    // };
  
    // const handleOngoingItemsPerPageChange = (pageSize) => {
    //   dispatch(setOngoingItemsPerPage(pageSize)); 
    // };
  
    useEffect(() => {
        dispatch(fetchAction("https://fakestoreapi.com/products", {
            method: 'Get'
        })); 
        
    }, [dispatch]);
  
    return (
        <div className="grid grid-cols-3 gap-2 ">
            {data && data.map((categories, index) => (
               <Link to={`/productDetail/${categories.id}`} key={index}>
                <div key={index} className="grid grid-cols-2 border-[1px] border-babyBlue font-quicksand p-3 mx-4 hover:transform hover:scale-105">
                  <div className="">
                    <div className="col-span -1 ">
                        <img src={categories.image} alt="Category Images" className="rounded-[10px]"/>
                    </div>
                    <div className="rounded-[10px] text-[10px]">
                      {categories.title}
                    </div>
                  </div>
              </div>
              </Link>
              ))}
            <div>
            {/* <Pagination
              current={ongoingCurrentPage}
              total={data && data.length}
              pageSize={ongoingItemsPerPage}
              onShowSizeChange={handleOngoingItemsPerPageChange} 
              onChange={handleOngoingPageChange}
              className="p-3"
            /> */}

            </div>
            
        </div>
  
);
}
