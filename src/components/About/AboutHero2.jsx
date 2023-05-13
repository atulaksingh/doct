import React from "react";
import { CgSmile } from "react-icons/cg";

function AboutHero2() {
  return (
    <div>
      <div className=" bg-[#e7f6fd] ">
        <div className="">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 lg:col-span-4">
              <div className="relative">
                <img
                  className="h-[100%] lg:h-[150vh] bg-top  bg-cover w-full "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683524716/inner_image_01_vdamkz.jpg"
                />
              </div>
            </div>
            <div className="col-span-12 h-full lg:col-span-8 py-20 px-5 lg:px-20 lg:bg-transparent bg-[#e7f6fd]">
              <div className="text-[2rem] leading-[37.5px] font-[600] py-2 text-[#142958]">
                For everyday care or life-changing care, you can count on us to
                keep you and your loved ones safe and healthy.
              </div>
              <div className="flex flex-col lg:flex-row justify-start gap-10 mt-10">
                <div>
                  <h1 className="text-[1rem] text-[#142958] font-[700]">Our Approach</h1>
                  <p className="text-[14px] leading-[1.5rem] text-[#142958]">
                    For everyday care or life-changing care, you can count on us
                    to keep you and loved ones.
                  </p>
                </div>
                <div>
                  <h1 className="text-[1rem] text-[#142958] font-[700] mb-5">
                    A community in which all people achieve their full potential
                    for health and well-being across the lifespan. We work to be
                    trusted by patients, a potential for health and valued
                    partner in the community, and creators of positive change.
                  </h1>
                  <p className="font-[400 text-[#142958]">
                    We use a team approach to providing health care, and involve
                    the patient as part of our team. Health care involves the
                    participation of patients, family, by our staff in the
                    community enhances our ability to provide of often highly
                    specialized effective.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-full mt-10">
                <div className="absolute w-full h-full lg:right-48 lg:top-20">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
                    <div className="col-span-1 bg-[#fafdff] rounded-xl lg:w-64">
                      <div className="px-8 py-16">
                        <div>
                          <CgSmile size={40} color="#01cab8" />
                          <div className="text-lg font-[500] py-2 text-[#142958]">
                            {" "}
                            Experience
                          </div>
                          <div className="text-[#142958] text-[14px]">
                            A community in which our vision is to all people
                            achieve their full potential for health and
                            well-being across complexity the lifespan.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 bg-[#fafdff] rounded-xl lg:w-64">
                      <div className="px-8 py-16">
                        <div>
                          <CgSmile size={40} color="#01cab8" />
                          <div className="text-lg font-[500] py-2 text-[#142958]">
                            {" "}
                            Experience
                          </div>
                          <div className="text-[#142958] text-[14px]">
                            A community in which our vision is to all people
                            achieve their full potential for health and
                            well-being across complexity the lifespan.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 bg-[#fafdff] rounded-xl lg:w-64">
                      <div className="px-8 py-16">
                        <div>
                          <CgSmile size={40} color="#01cab8" />
                          <div className="text-lg font-[500] py-2 text-[#142958]">
                            {" "}
                            Experience
                          </div>
                          <div className="text-[#142958] text-[14px]">
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
  );
}

export default AboutHero2;
