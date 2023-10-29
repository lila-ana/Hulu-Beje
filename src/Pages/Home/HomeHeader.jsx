import React from "react";
import HuluBejeLogo from "../../Assets/logo.png"
import CustomButton from "../../Components/Common/CustomButton";
import { ConfigProvider } from "antd";
import { Link } from "react-router-dom";

export default function HomeHeader() {
    const handleLogin = () => {
        
    }
    return (
    <div className=" flex items-center justify-between">
        <div className=" flex items-center justify-between">
            <img src={HuluBejeLogo} alt="Hulu Beje Logo" className="w-[160px] h-[140px] p-5" />
            <div className="font-poller sm:text-[18px] md:text-[30px] text-navyBlue leading-tight px-2 "> HULU BEJE</div>
        </div>
        <div className=" flex gap-7 p-7"> 
            <Link to="/login">
                <CustomButton className="font-quicksand text-navyBlue font-semibold" label="Login" />
            </Link>
            <Link to="/register">
                <CustomButton className="font-quicksand text-navyBlue font-semibold" label="Register" />
            </Link>
        </div>

    </div>
  
 );
}
