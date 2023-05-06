import React from "react";
import { BsCheck2 } from "react-icons/bs";
function Hero() {
  return (
    <>
     
      <div
        class="relative  w-full lg:h-[100vh] bg-cover bg-top lg:overflow-x-hidden"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1682332952/hero_home_03_qyii7f.jpg)",
        }}
      >
        <div className="text-white relative w-full">
          <div className="absolute w-full top-40 left-20">
            <div className="text-[5.25rem] font-[700] leading-[90px] mt-10 mb-3 w-[50%]">
              Taking Care Of Your Smile
            </div>
            <div>
              <div className="flex gap-2 ">
                <div className="">
                  <BsCheck2
                    color="green"
                    className="bg-white text-red-500 p-1 rounded-full"
                    size={22}
                  />
                </div>
                <div className="text-[1.2rem] text-white mb-2 font-[500]  leading-[20px]">
                  Preventive Checkups
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="">
                  <BsCheck2
                    color="green"
                    className="bg-white text-red-500 p-1 rounded-full"
                    size={22}
                  />
                </div>
                <div className="text-[1.2rem] text-white mb-2 font-[500] leading-[20px]">
                  Dentist Imaging and Testing
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="">
                  <BsCheck2
                    color="green"
                    className="bg-white text-red-500 p-1 rounded-full"
                    size={22}
                  />
                </div>
                <div className="text-[1.2rem] text-white mb-2 font-[500] leading-[20px]">
                  Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
