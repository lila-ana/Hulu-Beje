import React from "react";
import {CiSearch} from "react-icons/ci";
import {IoMdNotificationsOutline} from "react-icons/io"

export default function DashboardHeader() {
  
    return (
      <div className="flex border-b-[1px] border-blueGreen mb-[20px] justify-between">
         <div className="font-quicksand m-[5px] px-[5px] justify-center font-semibold">
              {""}
              Dashboard
         </div>
         <div className="flex items-center justify-center gap-[15px] px-[20px]">
            <div><CiSearch/></div>
            <div><IoMdNotificationsOutline/></div>
         </div>  
      </div>
  );
}
