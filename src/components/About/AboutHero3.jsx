import React from "react";
import { FaHeartbeat, FaStethoscope } from "react-icons/fa";

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
                    <div className="fill-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#142958"
                                  d="M17 21.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c2.58 0 4.25-1.67 4.25-4.25V8c0-2.58-1.67-4.25-4.25-4.25H7C4.42 3.75 2.75 5.42 2.75 8v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v8c0 3.44-2.31 5.75-5.75 5.75z"
                                ></path>
                                <path
                                  fill="#142958"
                                  d="M12.29 21.06c-.37 0-.69-.28-.74-.65C11 16.13 7.88 13 3.59 12.45a.753.753 0 01-.65-.84c.05-.41.43-.7.84-.65 4.98.64 8.62 4.27 9.25 9.25.05.41-.24.79-.65.84-.02.01-.06.01-.09.01z"
                                ></path>
                                <path
                                  fill="#142958"
                                  d="M8.93 22.13c-.37 0-.69-.28-.74-.65-.39-3.05-2.62-5.28-5.67-5.67a.753.753 0 01-.65-.84c.05-.41.43-.7.84-.65 3.75.48 6.48 3.22 6.96 6.96.05.41-.24.79-.65.84-.03.01-.06.01-.09.01zM5.13 22.77c-.37 0-.69-.28-.74-.65-.17-1.35-1.16-2.34-2.51-2.51a.753.753 0 01-.65-.84c.05-.41.43-.7.84-.65 2.02.26 3.55 1.79 3.81 3.81.05.41-.24.79-.65.84h-.1z"
                                ></path>
                              </svg>
                            </div>
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
                      <FaStethoscope size={40} color="#142958" />{" "}
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
