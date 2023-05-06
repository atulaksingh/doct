import React from "react";
import { ImQuotesRight } from "react-icons/im";
function Testimonials() {
  return (
    <div className="bg-transparent">
      <div className="ml-16 py-10">
        <div className="relative ">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683280394/background_home_03-03_lglzls.jpg"
          />
          <div className="absolute top-1 left-16 w-[40%] text-white">
            <div className="my-28">
              <div>
                {" "}
                <ImQuotesRight size={50} color="white" />
              </div>
              <div className="font-[IBM Plex Seri] text-[2rem] font-[italic] font-[400]  leading-9 py-5">
                All of the personnel I came in contact with, went above and
                beyond to help me with my medical problems. I am now enjoying a
                more active lifestyle and no longer feel the discomfort in
                chest.
              </div>
              <div>Betty Ballesteros Rendon</div>
              <p>— Dental Implants</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mx-16">
        <h1 className="text-[1.125rem] text-[#01cab8] font-[500] py-2">
          Our services
        </h1>
        <div className="text-[3.75rem] leading-[4.066rem] font-[700] text-[#1d1e21] pb-5">
          Premium dental care
        </div>
        <div className="grid grid-cols-3 gap-10 py-10">
          <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
            <div>
              <img
                className="rounded-full mx-auto"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
              />
            </div>
            <div className="font-[700] mt-1">Dj Dj Dj</div>
            <div>17,New York</div>
            <div className="border border-gray-300  mx-20 my-3"></div>
            <div className="pb-2">
              <ImQuotesRight className="mx-auto " size={30} color="#01cab8" />
            </div>{" "}
            <div>
              All of the personnel I came in contact with, went above and beyond
              to help me with my medical problems. I am now enjoying a more
              active lifestyle and no longer feel the discomfort in chest.
            </div>
          </div>
          <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
            <div>
              <img
                className="rounded-full mx-auto"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
              />
            </div>
            <div className="font-[700] mt-1">Dj Dj Dj</div>
            <div>17,New York</div>
            <div className="border border-gray-300  mx-20 my-3"></div>
            <div className="pb-2">
              <ImQuotesRight className="mx-auto " size={30} color="#01cab8" />
            </div>{" "}
            <div>
              All of the personnel I came in contact with, went above and beyond
              to help me with my medical problems. I am now enjoying a more
              active lifestyle and no longer feel the discomfort in chest.
            </div>
          </div>
          <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
            <div>
              <img
                className="rounded-full mx-auto"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
              />
            </div>
            <div className="font-[700] mt-1">Dj Dj Dj</div>
            <div>17,New York</div>
            <div className="border border-gray-300  mx-20 my-3"></div>
            <div className="pb-2">
              <ImQuotesRight className="mx-auto " size={30} color="#01cab8" />
            </div>{" "}
            <div>
              All of the personnel I came in contact with, went above and beyond
              to help me with my medical problems. I am now enjoying a more
              active lifestyle and no longer feel the discomfort in chest.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
