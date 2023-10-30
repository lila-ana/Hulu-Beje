import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import DashboardHeader from "../../Layout/DashboardHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { Pagination } from "antd";
import { setCompletedCurrentPage, setCompletedItemsPerPage, setOngoingCurrentPage, setOngoingItemsPerPage } from "../../Redux/Actions/paginationActions";

export default function Orders() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetch);
  
  //Ongoing Pagination Data
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

  //Completed Pagination Data
  const {completedCurrentPage, completedItemsPerPage } = useSelector((state) => state.pagination);

  const startCompletedIndex = (completedCurrentPage - 1) * completedItemsPerPage;
  const endCompletedIndex = completedCurrentPage * completedItemsPerPage;

  const displayedCompletedData = data && data.slice(startCompletedIndex, endCompletedIndex);

  const handleCompletedPageChange = (page) => {
    dispatch(setCompletedCurrentPage(page)); 
  };

  const handleCompletedItemsPerPageChange = (pageSize) => {
    dispatch(setCompletedItemsPerPage(pageSize)); 
  };

  useEffect(() => {
    dispatch(fetchAction("https://fakestoreapi.com/users", {
      method: 'GET',
    }));
  }, [dispatch]);

  return (
    <Layout>
      <div className="grid grid-rows-5 grid-flow-col gap-5 rounded-20 bg-white w-full h-full">
        <div className="row-span-1 bg-babyBlue rounded-20 p-4">
          <DashboardHeader />
        </div>
        <div className="row-span-2 border-navyBlue border-1 h-full rounded-10 p-3">
          <div className="font-quicksand font-semibold text-15 md:text-20 p-3">
            Ongoing Orders
          </div>
          <div className=" grid grid-cols-3 gap-[4px]">
          {displayedOngoingData && displayedOngoingData.map((item, index) => (
            <div key={index} className="grid border-[1px] border-babyBlue rounded-sm font-quicksand p-3 mx-4 ">
                <div>{item.username}</div>
                <div>{item.email}</div>
                </div>              ))}
          </div>
          <Pagination
              current={ongoingCurrentPage}
              total={data && data.length}
              pageSize={ongoingItemsPerPage}
              onShowSizeChange={handleOngoingItemsPerPageChange} 
              onChange={handleOngoingPageChange}
              className="p-3"
            />
        </div>

        <div className="row-span-2 bg-navyBlue border-babyBlue border-1 h-full rounded-10 p-3 text-white mx-2">
          <div className="font-quicksand font-semibold text-15 md:text-20 p-3">
            Completed Orders
          </div>
          <div className="grid grid-cols-3 gap-[4px]">
          {displayedCompletedData && displayedCompletedData.map((item, index) => (
              <div key={index} className="grid border-[1px] border-babyBlue rounded-sm font-quicksand p-3 mx-4 ">
                <div>{item.username}</div>
                <div>{item.email}</div>
                </div>
            ))}
          </div>
          <div className="text-white">
          <div>
          <Pagination
              current={completedCurrentPage}
              total={data && data.length}
              pageSize={completedItemsPerPage}
              onShowSizeChange={handleCompletedItemsPerPageChange} 
              onChange={handleCompletedPageChange}
              className="text-[#FFFFFF] Blue p-3"
              // itemLinkBg={"#FFFFFF"}

            />
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
