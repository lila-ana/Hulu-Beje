import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {BsTwitter} from 'react-icons/bs'

export default function HomeFooter() {
  return (
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

    </div>
  
 );
}
