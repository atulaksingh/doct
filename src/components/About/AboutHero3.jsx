import React from "react";
import { FaHeartbeat } from "react-icons/fa";

function AboutHero3() {
  return (
    <>
      <div>
        <div className=" bg-[#e7f6fd] pt-96 lg:pt-0">
          <div className="">
            <div className="grid grid-cols-12 w-full pt-[500px] lg:pt-0">
              <div className="col-span-12 lg:col-span-8 py-20 lg:mx-auto mx-5 ">
                <div className="flex flex-col lg:flex-row justify-between align-middle items-start gap-3 lg:gap-20 pt-7 pb-4 lg:w-[70%] mx-auto border-b border-gray-400">
                  <div>
                    <h1>
                      <FaHeartbeat size={40} color="#142958" />{" "}
                    </h1>
                    <h1 className="text-[1rem] text-[#142958] font-[700]">
                      Approach
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[1rem] text-gray-500  font-[400] mb-5">
                      A community in which all people achieve their full
                      potential for health and well-being across the lifespan.
                      We work to be trusted by patients, a potential for health
                      and valued partner in the community, and creators of
                      positive change.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between align-middle items-start gap-3 lg:gap-20 pt-7 pb-4 lg:w-[70%] mx-auto border-b border-gray-400">
                  <div>
                    <h1>
                      <FaHeartbeat size={40} color="#142958" />{" "}
                    </h1>
                    <h1 className="text-[1rem] text-[#142958] font-[700]">
                      Approach
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[1rem] text-gray-500  font-[400] mb-5">
                      A community in which all people achieve their full
                      potential for health and well-being across the lifespan.
                      We work to be trusted by patients, a potential for health
                      and valued partner in the community, and creators of
                      positive change.
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between align-middle items-start gap-3 lg:gap-20 pt-7 pb-4 lg:w-[70%] mx-auto border-b border-gray-400">
                  <div>
                    <h1>
                      <FaHeartbeat size={40} color="#142958" />{" "}
                    </h1>
                    <h1 className="text-[1rem] text-[#142958] font-[700]">
                      Approach
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[1rem] text-gray-500  font-[400] mb-5">
                      A community in which all people achieve their full
                      potential for health and well-being across the lifespan.
                      We work to be trusted by patients, a potential for health
                      and valued partner in the community, and creators of
                      positive change.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="relative">
                  <img
                    className="h-[100vh] bg-top  bg-cover w-full "
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683527603/inner_image_02_ko7qwc.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero3;
