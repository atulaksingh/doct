import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { TbCalendarEvent } from "react-icons/tb";
import HeroCard from "../Card/HeroCard";
function Hero() {
  return (
    <>
      <div
        class="relative  w-full h-[100vh] lg:bg-cover bg-no-repeat bg-top  sm:bg-top lg:bg-top lg:overflow-x-hidden"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1682332952/hero_home_03_qyii7f.jpg)",
        }}
      >
        <div className="text-white relative w-full">
          <div className="absolute  top-20 lg:top-40 left-4 lg:left-20 w-[90%] lg:w-[55%]">
            <div className="text-[3.25rem] sm:text-[4.25rem] lg:text-[5.25rem] font-[700] leading-[60px] sm:leading-[70px] lg:leading-[90px] lg:mt-10 mb-3 ">
              Taking Care Of Your Smile
            </div>
            <div>
              <div className="flex gap-2 mt-5  lg:mt-0">
                <div className="text-lg sm:text-xl">
                  <BsCheck2
                    color="green"
                    className="bg-white text-red-500 p-1 rounded-full "
                  />
                </div>
                <div className="sm:text-[1.2rem]  sm:text-white mb-2 font-[400] sm:font-[500]  leading-[20px]">
                  Preventive Checkups
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-lg sm:text-xl">
                  <BsCheck2
                    color="green"
                    className="bg-white text-red-500 p-1 rounded-full"
                  />
                </div>
                <div className="text-[1.2rem] text-white mb-2 font-[500] leading-[20px]">
                  Dentist Imaging and Testing
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-lg lg:text-xl">
                  <BsCheck2
                    color="green"
                    className="bg-white text-red-500 p-1 rounded-full"
                  />
                </div>
                <div className="text-[1.2rem] text-white mb-2 font-[500] leading-[20px]">
                  Available 24/7
                </div>
              </div>
            </div>
            <div>
              <div className="lg:mx-0  bg-white text-black w-full p-5 rounded-lg mt-5 ">
                <div className="sm:flex flex-wrap flex-col sm:gap-0 gap-4 sm:flex-row sm:justify-between align-middle items-start sm:items-center">
                  <div>
                    <img
                      className="rounded-full"
                      src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683880783/dr_04_vlwidg.jpg"
                    />
                  </div>



                  <div className="">
                    <div className="w-full sm:py-0 py-3 sm:mb-0 mb-5">
                      <label
                        for="countries"
                        class="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        MAKE AN APPOINTMENT FOR:
                      </label>
                      <select
                        id="countries"
                        class="bg-white border-b-2 border-[#23b5d1] text-gray-900 text-sm  block w-full md:w-96 lg:w-80  p-2.5  dark:placeholder-gray-400 focus:outline-none"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>

                  <div className="border px-5 py-3 border-[#01cab8] cursor-pointer bg-[#01cab8] hover:bg-white text-white hover:text-[#01cab8] flex justify-center md:justify-between align-middle items-center gap-4 ">
                    <TbCalendarEvent size={22} color="" className="" />
                    <h1>Book Dental </h1>
                  </div>



                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="">
        <HeroCard />
      </div> */}
    </>
  );
}

export default Hero;
