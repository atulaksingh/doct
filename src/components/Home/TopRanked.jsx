import React from "react";
import { CgSmile } from "react-icons/cg";
import { RiNurseFill } from "react-icons/ri";

function TopRanked() {
  return (
    <>
      <div
      // class="relative   w-full lg:h-[100vh] bg-cover bg-center "
      // style={{
      //   backgroundImage:
      //     "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1683262682/background_home_03-06_mvq0y4.jpg)",
      // }}
      >
        <div className=" bg-[#e7f6fd] pb-[920px] lg:pb-0">
          <div className=" ">
            <div className="grid grid-cols-12 py-16 px-5 lg:gap-10">
              <div className="col-span-12 lg:col-span-5 lg:mx-0 ">
                <div>
                  <img
                    className=" w-full"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683264125/inner_image_home_03-01_rgqwy6.png"
                  />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 py-16 ">
                <div className="text-[.9375rem] text-[#27b6d2] font-[700]">
                  Top-ranked team of medical specialist
                </div>
                <div className="text-[2rem] leading-[37.5px] font-[600] py-2 ">
                  We are dedicated to providing the highest level of dental
                  medicine along with friendly, compassionate service.
                </div>
                <div className="relative w-full h-full ">
                  <div className="absolute w-full h-full lg:right-48 top-14 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  lg:gap-32 ">
                      <div className="col-span-1 bg-[#fafdff] rounded-xl w-full lg:w-64">
                        <div className="px-8 py-16">
                          <div>
                            <CgSmile size={40} color="#27b6d2" />
                            <div className="text-lg font-[500] py-2">
                              {" "}
                              Experience
                            </div>
                            <div className="text-[#747576]">
                              A community in which our vision is to all people
                              achieve their full potential for health and
                              well-being across complexity the lifespan.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 bg-[#fafdff] rounded-xl w-full lg:w-64">
                        <div className="px-8 py-16">
                          <div>
                            <RiNurseFill size={40} color="#27b6d2" />
                            <div className="text-lg font-[500] py-2">
                              {" "}
                              Experience
                            </div>
                            <div className="text-[#747576]">
                              A community in which our vision is to all people
                              achieve their full potential for health and
                              well-being across complexity the lifespan.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 bg-[#fafdff] rounded-xl w-full lg:w-64">
                        <div className="px-8 py-16">
                          <div>
                            <div className="fill-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#27b6d2"
                                  d="M17 21.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c2.58 0 4.25-1.67 4.25-4.25V8c0-2.58-1.67-4.25-4.25-4.25H7C4.42 3.75 2.75 5.42 2.75 8v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v8c0 3.44-2.31 5.75-5.75 5.75z"
                                ></path>
                                <path
                                  fill="#27b6d2"
                                  d="M12.29 21.06c-.37 0-.69-.28-.74-.65C11 16.13 7.88 13 3.59 12.45a.753.753 0 01-.65-.84c.05-.41.43-.7.84-.65 4.98.64 8.62 4.27 9.25 9.25.05.41-.24.79-.65.84-.02.01-.06.01-.09.01z"
                                ></path>
                                <path
                                  fill="#27b6d2"
                                  d="M8.93 22.13c-.37 0-.69-.28-.74-.65-.39-3.05-2.62-5.28-5.67-5.67a.753.753 0 01-.65-.84c.05-.41.43-.7.84-.65 3.75.48 6.48 3.22 6.96 6.96.05.41-.24.79-.65.84-.03.01-.06.01-.09.01zM5.13 22.77c-.37 0-.69-.28-.74-.65-.17-1.35-1.16-2.34-2.51-2.51a.753.753 0 01-.65-.84c.05-.41.43-.7.84-.65 2.02.26 3.55 1.79 3.81 3.81.05.41-.24.79-.65.84h-.1z"
                                ></path>
                              </svg>
                            </div>
                            <div className="text-lg font-[500] py-2">
                              {" "}
                              Experience
                            </div>
                            <div className="text-[#747576]">
                              A community in which our vision is to all people
                              achieve their full potential for health and
                              well-being across complexity the lifespan.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRanked;
