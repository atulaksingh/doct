import React from "react";
import { CgSmile } from "react-icons/cg";
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
