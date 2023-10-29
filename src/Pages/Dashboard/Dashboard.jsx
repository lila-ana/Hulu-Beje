import React from "react";
import Layout from '../../Layout/Layout'
import DashboardHeader from "../../Layout/DashboardHeader";

export default function Dashboard() {
  
  
return (
    <Layout>
        <div className= "grid grid-rows-6 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full "> 
            <div className="row-span-2 bg-babyBlue p-4 rounded-[20px] ">
                <DashboardHeader/>
                <div className="grid grid-cols-4 gap-[12px] p-[10px] h-[70px]">
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                    <div className="col-span-1 border-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                    <div className="col-span-1 border-navyBlue bg-navyBlue border-[1px] rounded-[10px]">
                        {''}
                    </div>
                </div>
            </div>
            <div className="row-span-4">
                <div className="grid grid-cols-10 w-full h-full">
                    <div className="col-span-3">
                        <div className="grid grid-rows-2 grid-flow-col w-full h-full gap-[20px] p-[10px]">
                            <div className="row-span-1 border-navyBlue border-[1px] rounded-[20px]"></div>
                            <div className="row-span-1 border-navyBlue border-[1px] rounded-[20px]"></div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-rows-2 grid-flow-col w-full h-full gap-[20px] p-[10px]">

                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="grid grid-rows-2 grid-flow-col w-full h-full gap-[20px] p-[10px]">
                            <div className="row-span-1 border-navyBlue border-[1px] rounded-[20px]"></div>
                            <div className="row-span-1 border-navyBlue border-[1px] rounded-[20px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
}
