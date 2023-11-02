import CustomButton from "../../Components/Common/CustomButton";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <div className="bg-no-repeat w-screen h-[100vh]" style={{ backgroundImage: "url('src/Assets/LandingPageImage (2).png')" }}>
       <div className="grid grid-cols-2	" >
      <div className=" grid col-span-1 m-10 justify-center items-center ">
        <div className="font-poller sm:text-[25px] md:text-[40px] text-white leading-tight m-10">
          WELCOME TO <br /> HULU BEJE
        </div>
        <div className="font-poppins sm:text-[10px] md:text-[17px] font-extralight text-white m-10">
          Discover a world of endless possibilities with our e-Commerce site. From
          fashion to electronics, home decor to fitness gear, we have every1thing
          you need. Browse our extensive collection, find the perfect products, and
          enjoy a seamless shopping experience.
        </div>
        <div>
          <Link to="/home">
            <CustomButton className=' sm:text-[10px] md:text-[15px] bg-navyBlue hover:bg-white border-navyBlue border-[1px] text-quicksand hover:text-navyBlue text-white  font-light m-10' label="SHOP"/>
          </Link>
        </div>
      </div>
    </div>
    </div>
   
  );
}


