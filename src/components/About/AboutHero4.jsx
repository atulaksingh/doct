import React from "react";
import { BsCheck2 } from "react-icons/bs";

function AboutHero4() {
  return (
    <>
      <div className="lg:pl-14 lg:pt-10 bg-white ">
        {/* <div className="relative text-white w-full  h-[150vh] lg:h-full">
          <img
            className="w-full h-[150vh] lg:h-[100vh] bg-cover"
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683529140/background_image_03_vi1hzc.jpg"
          /> */}
          <div class="relative w-full h-[100vh] lg:h-full text-white">
          <img
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683529140/background_image_03_vi1hzc.jpg"
            alt="Your Image"
            // className="w-full h-36"
            style={{width:"100%" , height: "100%",objectFit:"cover" }}
          />
          <div className="absolute top-3 h-[100vh] lg:h-full lg:top-10 lg:left-24 w-[100%] lg:w-[40%] py-20 px-5 lg:px-0" >
            <div className="text-[2rem] sm:text-[2.5rem] lg:text-[3.75rem] leading-10 lg:leading-[4.066rem] font-[700]  pb-5 w-full">
              We are a multidisciplinary team of experts
            </div>
            <div className="text-[1.25rem] lg:text-[1.375rem] font-[700] mb-5">
              Delivering world class medical care
            </div>
            <div className="mb-5">
              Our Hospital provide the highest quality care to improve the
              health of our entire community through innovation, collaboration,
              service excellence, diversity and a commitment to patient safety
            </div>

            <button className="bg-transparent border border-white py-5 px-6 font-[500] text-white hover:bg-[#fff] hover:text-[#02e2be]">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero4;
