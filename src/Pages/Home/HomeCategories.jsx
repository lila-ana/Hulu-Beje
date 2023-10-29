import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { setOngoingCurrentPage, setOngoingItemsPerPage } from "../../Redux/Actions/paginationActions";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.fetch);
    
    const { ongoingCurrentPage, ongoingItemsPerPage } = useSelector((state) => state.pagination);

    const startOngoingIndex = (ongoingCurrentPage - 1) * ongoingItemsPerPage;
    const endOngoingIndex = ongoingCurrentPage * ongoingItemsPerPage;
  
    const displayedOngoingData = data && data.slice(startOngoingIndex, endOngoingIndex);
  
    const handleOngoingPageChange = (page) => {
      dispatch(setOngoingCurrentPage(page)); 
    };
  
    const handleOngoingItemsPerPageChange = (pageSize) => {
      dispatch(setOngoingItemsPerPage(pageSize)); 
    };
  
    useEffect(() => {
        dispatch(fetchAction("https://jsonplaceholder.typicode.com/photos", {
            method: 'Get'
        })); 
    }, [dispatch]);
  
    return (
        <div className="grid grid-cols-3 gap-2 ">
            {displayedOngoingData && displayedOngoingData.map((categories, index) => (
               <Link to={`/productDetail/${categories.id}`} key={index}>
              <div key={index} className="grid grid-cols-2 border-[1px] border-babyBlue rounded-sm font-quicksand p-3 mx-4 "> 
                <div className="rounded-[10px] border-navyBlue border-[1px]">
                    <img src={categories.url} alt="Category Images" className="rounded-[10px]"/>
                </div>
              </div>
              </Link>
              ))}
            <div>
            <Pagination
              current={ongoingCurrentPage}
              total={data && data.length}
              pageSize={ongoingItemsPerPage}
              onShowSizeChange={handleOngoingItemsPerPageChange} 
              onChange={handleOngoingPageChange}
              className="p-3"
            />

            </div>
            
        </div>
  
);
}
