import React, { useEffect, useState } from "react";
import HuluBejeLogo from "../../Assets/logo.png"
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { fetchAction } from "../../Redux/Actions/fetchActions";
import CustomButton from "../../Components/Common/CustomButton";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { API_BASE_URL } from "../../Config/URLs/Endpoint";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Home({}) {

  const [user, setUser] = useState(null);

  let token=localStorage.getItem("access_token");

  const dispatch = useDispatch();
    const data = useSelector((state) => state.fetch);
    
    const handleLogout= () => {
      localStorage.clear();
    }
    useEffect(() => {
        axios
          .get(`${API_BASE_URL}/auth/user`, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUser(response.data);
            console.log(response,"response");
            
          })
          .catch((error) => {
            console.error("Error while fetching user information:", error);
          });
        
      }, []);

  
    useEffect(() => {
        dispatch(fetchAction("https://fakestoreapi.com/products", {
            method: 'Get'
        })); 
        
    }, [dispatch]);
  
  console.log(user?.username,"user");
  
  return (
    <div className="grid grid-rows-10">
      <div className="row-span-1 mb-[20px]">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-between">
            <img src={HuluBejeLogo} alt="Hulu Beje Logo" className="w-[160px] h-[140px] p-5" />
            <div className="font-poller sm:text-[18px] md:text-[30px] text-navyBlue leading-tight px-2 "> HULU BEJE</div>
        </div>
        {token ? (
            <div className="flex gap-[20px]">
            <span className="quicksand font-semibold">Welcome,</span> {user?.username}!<div></div>
            <CustomButton label='Logout' onClick={handleLogout}/>
          </div>) : (
        <div className=" flex gap-7 p-7"> 
            <Link to="/login">
                <CustomButton className="font-quicksand text-navyBlue font-semibold" label="Login" />
            </Link>
            <Link to="/register">
                <CustomButton className="font-quicksand text-navyBlue font-semibold" label="Register" />
            </Link>
        </div>
          )}

    </div>
      </div>
      <div className="row-span-2 mb-[40px]"> 
      <div
      className="bg-cover p-[10px] my-4 justify-center items-center"
      style={{backgroundImage: "url('src/Assets/CarouselBg.jpg')"}}
    >
      <div className="grid grid-cols-2 justify-center">
        <div className=" flex flex-col col-span-1 justify-center items-center m-2">
          <div className="text-poller sm:text-[60px] md:text-[90px] font-poller justify-center items-center p-1 text-navyBlue">50% OFF</div>
          <div className="text-poller sm:text-[16px] md:text-[24px] font-quicksand font-extrabold p-1 pb-3">🌟 Big Savings Await! Get Ready for Our Spectacular Sale! 🌟</div>
          <div className="text-poller sm:text-[10px] md:text-[16px] font-quicksand font-medium p-1">
            <span className="font-semibold">Attention, savvy shoppers!</span> The deal of a lifetime is here, and you won't 
            want to miss it. Our e-commerce site is thrilled to offer you jaw-dropping 
            discounts, with over 50% off on a wide range of products!</div>
        </div>
        <div className="flex flex-col col-span-1 items-center justify-center">
          <img src="src/Assets/50.jpg" alt="off sale products" className="rounded-[10px] m-4" />
        </div>
      </div>
      
    </div>      
    </div>

      <div className="row-span-6"> 
      <div className="grid grid-cols-3 gap-2 ">
            {data && data.map((categories, index) => (
               <Link to={`/productDetail/${categories.id}`} key={index}>
                <div key={index} className="grid grid-cols-2 border-[1px] border-babyBlue font-quicksand p-3 mx-4 hover:transform hover:scale-105">
                  <div className="">
                    <div className="col-span -1 ">
                        <img src={categories.image} alt="Category Images" className="rounded-[10px]"/>
                    </div>
                    <div className="rounded-[10px] text-[10px]">
                      {categories.title}
                    </div>
                  </div>
              </div>
              </Link>
              ))}
            <div>
            {/* <Pagination
              current={ongoingCurrentPage}
              total={data && data.length}
              pageSize={ongoingItemsPerPage}
              onShowSizeChange={handleOngoingItemsPerPageChange} 
              onChange={handleOngoingPageChange}
              className="p-3"
            /> */}

            </div>
            
        </div>
      </div>


      <div className="row-span-1"> 
<div className="grid grid-cols-3 gap-4 w-full h-full " style= {{backgroundImage: "url('src/Assets/FooterBackg.jpg')"}}>
        <div className="col-span-1 p-4" >
            <div className="font-poller sm:text-[16px] md:text-[24px] text-navyBlue px-2"> HULU BEJE</div>
            <div className="font-quicksand sm:text-[10px] md:text-[15px] text-black px-2">Your One-Stop Shopping Destination.</div>
        </div>
        <div className="col-span-1 m-4" >
            <div className="font-quicksand sm:text-[10px] md:text-[15px] text-white p-2 ">Terms and Conditions</div>
            <div className="font-quicksand sm:text-[10px] md:text-[15px] text-white p-2 ">Privacy Policy</div>
            <div className="font-quicksand sm:text-[10px] md:text-[15px] text-white p-2 ">Cookie Policy</div>
        </div>
        <div className="col-span-1 m-4" >
            <div className="font-quicksand sm:text-[12px] md:text-[17px] text-white p-2 font-semibold">Let's chat!</div>
            <div className="flex gap-5 p-2 ">
                <a href=""><BsTwitter/></a>
                <a href=""><AiFillInstagram/></a>
                <a href=""><AiFillLinkedin/></a>
                <a href=""><AiFillFacebook/></a>

            </div>
        </div>

    </div>      </div>
    </div>
    
  );
}
