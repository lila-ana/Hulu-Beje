import React, { useEffect, useState } from "react";
import HomeHeader from "../Home/HomeHeader";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import HomeFooter from "../Home/HomeFooter";
import { addToCart } from "../../Redux/Actions/cartActions";
import ShoppingCartModal from "./ShoppingCartModal";
import CustomButton from "../../Components/Common/CustomButton";

export default function ProductSubDetails({ products }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetch.data);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const ProductSubDetails = data ? [data.find((item) => item.id === Number(id))]: [];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Open the modal
    setShowModal(true);
  };

  useEffect(() => {
    if(!data) {
      dispatch(fetchAction("https://jsonplaceholder.typicode.com/photos", {
        method: 'Get'
      }));
    }
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="grid grid-rows-10">
      <div className="row-span-1">
        <HomeHeader />
      </div>
      <div className="row-span-1">
      <div
        className="bg-cover p-[10px] my-4 justify-center items-center"
        style={{backgroundImage: "url('src/Assets/CarouselBg.jpg')"}}
      >
        {ProductSubDetails?.map((item)=> (<div className="row-span-2 font-poppins font-semibold rounded-sm bg-navyBlue text-babyBlue p-[20px]">{item.title}</div>))}
      </div>
      </div>
      <div>
        {ProductSubDetails.map((product) => (
          <div className="grid grid-cols-3 items-center justify-center m-6">
            <div className=" col-span-1">
              <img src={product.image} alt="Product Sub Category Image" className="p-4 border-r-[1px] border-navyBlue "/>
            </div>
            <div className="col-span-2 p-2">
              <div className='p-4'
                key={product.id}>
                <div className="font-quicksand p-2"><span className="font-semibold font-poppins">Product: </span>{product.title}</div>
                <div className="font-quicksand p-2"><span className="font-semibold font-poppins">Product Description: </span>${product.description}</div>
                <div className="font-quicksand p-2"><span className="font-semibold font-poppins">Price: </span>${product.price}</div>
                <div className="font-quicksand p-2"><span className="font-semibold font-poppins">Category: </span>{product.category}</div>
                <div  className="pt-4 flex items-center justify-between">
                  <CustomButton label="Add to Cart" onClick={() => handleAddToCart(product)}></CustomButton>
                  {showModal && (
                    <ShoppingCartModal cartItems={cartItems} closeModal={closeModal} />
                   )}
                </div>
                  
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row-span-1">
        <HomeFooter />
      </div>
      
    </div>
  );
}
