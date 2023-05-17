import React from "react";
import { BsCheck2 } from "react-icons/bs";

function PS() {
  return (
    <>
      <div className="lg:pl-14 pt-16 bg-[#e7f6fd] ">
        <div className="relative w-full h-[100vh] lg:h-full text-white">
          <img
            // className="w-full h-[100vh]"
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683271219/background_home_03-02_id27ed.jpg"
            style={{width:"100%" , height: "100%",objectFit:"cover" }}
          />
          <div className="absolute top-1 h-[100vh] lg:h-full lg:top-10 lg:left-24 w-[100%] lg:w-[40%] py-10 px-5 lg:px-0 ">
            <h1 className="text-[1.125rem] text-[#01cab8] font-[500] py-2">
              Product & Services
            </h1>
            <div className="text-[3.75rem] leading-[4.066rem] font-[700] text-[#1d1e21] pb-5">
              Clear Retainers Available
            </div>
            <div className="text-[#9c9b9b]">
              Since a retainer must be worn during the day initially, this is
              incredibly advantageous for anyone who is looking forward to
              showing off their newly straight smile. Other benefits of a clear
              retainer include:
            </div>
            <div className="my-5">
              <div className="flex gap-2 my-1">
                <div className="">
                  <BsCheck2
                    color="white"
                    className="bg-[#01cab8]  p-0.5 rounded-full"
                    size={22}
                  />
                </div>
                <div className=" text-[#9c9b9b] leading-[20px]">
                  Preventive Checkups
                </div>
              </div>
              <div className="flex gap-2 my-1">
                <div className="">
                  <BsCheck2
                    color="white"
                    className="bg-[#01cab8]  p-0.5 rounded-full"
                    size={22}
                  />
                </div>
                <div className=" text-[#9c9b9b] leading-[20px]">
                  Preventive Checkups
                </div>
              </div>
              <div className="flex gap-2 my-1">
                <div className="">
                  <BsCheck2
                    color="white"
                    className="bg-[#01cab8]  p-0.5 rounded-full"
                    size={22}
                  />
                </div>
                <div className=" text-[#9c9b9b] leading-[20px]">
                  Preventive Checkups
                </div>
              </div>
            </div>
            <button className="bg-[#01cab8] border border-[#01cab8] py-5 px-6 text-white hover:bg-[#fff] hover:text-[#23b5d1]">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PS;
