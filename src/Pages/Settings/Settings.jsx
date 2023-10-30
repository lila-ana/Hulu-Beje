import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import DashboardHeader from "../../Layout/DashboardHeader";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { useDispatch } from "react-redux";


export default function Settings() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAction("https://172.16.33.178:3000/auth/users", {
      method: 'GET',
    }));
  }, [dispatch]);
  return (
    <Layout>
        <div className= "grid grid-rows-5 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
            <DashboardHeader/>
            <div className="grid grid-cols-10 gap-4 p-3 ">
              
            </div>
        </div>

      </div>
    </Layout>
  );
}
