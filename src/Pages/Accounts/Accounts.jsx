/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState } from "react";
import Layout from "../../Layout/Layout";
import DashboardHeader from "../../Layout/DashboardHeader";
import CustomButton from "../../Components/Common/CustomButton";
import UserAcount from "./UserAccount";
import SupplierAccount from "./SupplierAccount";


export default function Account () {
  const [tab, setTab] = useState("users");

  const handleTab = (value) => {
    setTab(value);
  };

  return (
    <Layout>
      <div className= "grid grid-rows-4 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
            <DashboardHeader/>
            <div className="grid grid-cols-10 gap-4 p-3 ">
                <CustomButton onClick={()=> handleTab("users")} label='Users' className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] font-quicksand "/>
                <CustomButton onClick={()=> handleTab("supplier")} label="Suppliers" className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] bg-navyBlue text-white rounded-[10px] font-quicksand"/>
            </div>
        </div>
        <div className="row-span-3">
          {tab=="users" ? <UserAcount/> : <SupplierAccount setTab={setTab}/> }
        </div>
      </div>
    </Layout>
  );
}

