/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HomeHeader from "../Home/HomeHeader";
import HomeFooter from "../Home/HomeFooter";
import { getproductList } from "../../Store";

 const  ProductDetail=({
  products,
  product_single,
  filtered_products,
  getproductList,})=> {

  const { id } = useParams();

  const ProductDetails = products ? [products?.find((item) => item.id === Number(id))] : [];

  useEffect(() => {
   getproductList()
  }, []);

  
  return (
    <div className="grid grid-rows-10">
      <div className="row-span-1"><HomeHeader/></div>
      <div
        style={{backgroundImage: "url('src/Assets/CarouselBg.jpg')"}}
      >
        {ProductDetails?.map((item, index)=> (<div key={index} className="row-span-2 font-poppins font-semibold rounded-sm bg-navyBlue text-babyBlue p-[20px]">{item.title}</div>))}
      </div>
      <div className="row-span-5">
        <div className="grid grid-cols-3 gap-2 ">
          {ProductDetails?.map((categories, index) => (
            <Link to={`/productSubDetail/${categories.id}/${categories.id}`} key={index}>
              <div key={index} className="grid grid-cols-2 border-[1px] border-babyBlue rounded-sm font-quicksand p-3 mx-4 ">
                <div className="rounded-[10px]">
                  <img src={categories.image} alt="Category Images" className="rounded-[10px]" />
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

const mapStateToProps = (state) => {
  return {
    product_loading: state.productReducer.product_loading,
    products:state.productReducer.products,
    product_single:state.productReducer.product_single,
    filtered_products:state.productReducer.filtered_products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getproductList: () => dispatch(getproductList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
