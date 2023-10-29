import React from "react";
import HomeHeader from "./HomeHeader";
import HomeCarousel from "./HomeCarousel";
import HomeCategories from "./HomeCategories";
import HomeFooter from "./HomeFooter";

export default function Home() {
  return (
    <div className="grid grid-rows-10">
      <div className="row-span-1 mb-[20px]"><HomeHeader/></div>
      <div className="row-span-2 mb-[40px]"> <HomeCarousel/></div>
      <div className="row-span-6"> <HomeCategories/></div>
      <div className="row-span-1"> <HomeFooter/></div>
    </div>
    
  );
}
