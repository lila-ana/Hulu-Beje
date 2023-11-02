import { IoMdAddCircleOutline } from "react-icons/io";
import { GrFormView} from "react-icons/gr";
import DashboardHeader from "../../Layout/DashboardHeader";
import CustomButton from "../../Components/Common/CustomButton";
import Layout from "../../Layout/Layout";
import AddProducts from "./AddProducts";
import ViewProducts from "./viewProducts";
import { useState } from "react";


export default function SidebarProducts() {

  const [tab, setTab] = useState("addProduct");

  const handleTab = (value) => {
    setTab(value);
  };
  
 
  return (
    <Layout>
      <div className= "grid grid-rows-6 grid-flow-col gap-[20px] rounded-[20px] bg-white w-full h-full"> 
        <div className="row-span-1 bg-babyBlue rounded-[20px]">
            <DashboardHeader/>
            <div className="grid grid-cols-10 gap-4 p-3 ">
              <CustomButton onClick={()=> handleTab("addProduct")} label='Add Product' className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] rounded-[10px] font-quicksand ">
                <IoMdAddCircleOutline/>
              </CustomButton>
              <CustomButton onClick={()=> handleTab("viewProducts")} label="ViewProduct" className="flex gap-3 items-center justify-center col-span-2 border-navyBlue border-[1px] bg-navyBlue text-white rounded-[10px] font-quicksand">
                <GrFormView className="fill-white"/>
              </CustomButton>
            </div>
        </div>
        <div className="row-span-5 font-quicksand">
        <div className="">
            {tab=="addProduct" ? <AddProducts/> : <ViewProducts setTab={setTab}/> }
        </div>
        </div>
      </div> 
    </Layout>
  );
}
