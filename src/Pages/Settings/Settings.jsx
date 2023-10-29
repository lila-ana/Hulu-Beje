import React from "react";
import Layout from "../../Layout/Layout";

export default function Settings() {
  return (
    <Layout>
        <div className= "grid grid-rows-5 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
            <DashboardHeader/>
            <div className="grid grid-cols-10 gap-4 p-3 ">
              <CustomButton label='Add Product' className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] font-quicksand ">
                <IoMdAddCircle/>
              </CustomButton>
              <CustomButton lable="ViwProduct" className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] bg-navyBlue text-white font-quicksand">
                <GrView className="fill-white"/>
              </CustomButton>
            </div>
        </div>

      </div>
    </Layout>
  );
}
