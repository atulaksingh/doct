import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import { RiCalendarCheckLine } from "react-icons/ri";

function AboutHero() {
  return (
    <div>
      {/* <div
        class="relative  w-full h-[100vh] bg-cover bg-top overflow-x-hidden"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1683376813/hero_about_vjypnl.jpg)",
        }}
      >
        <div className="text-white relative h-full w-full">
        
          <div className="absolute top-10 lg:top-40 left-5 lg:left-20 py-5 w-[90%]  lg:w-[40%]">
            <div className="text-[3.25rem] sm:text-[4.25rem] font-[700] leading-[90px] lg:mt-10 lg:mb-3">
              About Us
            </div>
            <div className="text-[1.5rem]">
              We provide the best world-class treatment, service and care for
              all our patients.
            </div>
            <div className="flex flex-col lg:flex-row justify-start lg:gap-10 py-5 lg:py-10">
              <div className=" ">
                <div>Make an Appointment</div>
                <div className="flex justify-start align-middle items-center gap-2">
                  <BiPhone size={30} color="#fff" />
                  <div className="text-white font-bold text-[2em]">
                    88 700 600
                  </div>
                </div>
              </div>
              <div className="border-r border-gray-300"></div>
              <div>
                <div>Online Schedule</div>
                <div className="flex justify-start align-middle items-center gap-2">
                  <RiCalendarCheckLine size={35} color="#fff" />
                  <div className="text-white font-bold text-[2em]">
                    Book here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="text-white  ">
        <img
          className="w-full h-[80vh] lg:h-full bg-cover"
          src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683376813/hero_about_vjypnl.jpg"
          style={{objectFit:"cover" }}
        />

        <div className="absolute top-20 lg:top-40 left-5 lg:left-20 lg:py-5 w-[90%]  lg:w-[40%]">
          <div className="text-[3.55rem] sm:text-[4.25rem] font-[700] leading-[90px] lg:mt-10 lg:mb-3">
            About Us
          </div>
          <div className="text-[1.3rem] md:text-[1.5rem]">
            We provide the best world-class treatment, service and care for all
            our patients.
          </div>
          <div className="flex flex-col lg:flex-row justify-start lg:gap-10 py-5 lg:py-10">
            <div className=" ">
              <div>Make an Appointment</div>
              <div className="flex justify-start align-middle items-center gap-2">
                <BiPhone size={30} color="#fff" />
                <div className="text-white font-bold text-[2em]">
                  88 700 600
                </div>
              </div>
            </div>
            <div className="border-r border-gray-300"></div>
            <div>
              <div>Online Schedule</div>
              <div className="flex justify-start align-middle items-center gap-2">
                <RiCalendarCheckLine size={35} color="#fff" />
                <div className="text-white font-bold text-[2em]">Book here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
