import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import { Link, useParams } from "react-router-dom";
import HomeHeader from "../Home/HomeHeader";
import HomeFooter from "../Home/HomeFooter";
import Breadcrumb from "../../Components/Common/BreadCrumb";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetch.data);
  
  const ProductDetails = data ? [data.find((item) => item.id === Number(id))] : [];

  useEffect(() => {
    if(!data) {
      dispatch(fetchAction("https://jsonplaceholder.typicode.com/photos", {
        method: 'Get'
      }));
    }
  }, [dispatch]);

  return (
    <div className="grid grid-rows-10">
      <div className="row-span-1"><HomeHeader/></div>
      {/* <div className="row-span-2"><Breadcrumb/></div> */}
      <div className="row-span-5">
        <div className="grid grid-cols-3 gap-2 ">
          {ProductDetails.map((categories, index) => (
            <Link to={`/productSubDetail/${categories.id}/${categories.id}`} key={index}>
              <div key={index} className="grid grid-cols-2 border-[1px] border-babyBlue rounded-sm font-quicksand p-3 mx-4 ">
                <div className="rounded-[10px] border-navyBlue border-[1px]">
                  <img src={categories.thumbnailUrl} alt="Category Images" className="rounded-[10px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="row-span-2"><HomeFooter/></div>
    </div>
  );
}
