import React from "react";
import { ImQuotesRight } from "react-icons/im";
import ExprienceCard from "../Card/ExprienceCard";
function Testimonials() {
  return (
    <div className=" bg-[#e7f6fd] lg:bg-transparent">
      <div className="lg:ml-16 py-10">
        <div className="relative w-full h-[100vh] lg:h-full text-white ">
          <img
            // className="w-full h-full"
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683280394/background_home_03-03_lglzls.jpg"
            style={{width:"100%" , height: "100%",objectFit:"cover" }}
          />
          <div className="absolute top-1  lg:left-16 w-full lg:w-[40%] text-white lg:px-0 px-5">
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

      <div className="text-center mx-5 lg:mx-16">
        <h1 className="text-[1.125rem] text-[#01cab8] font-[500] ">
        Testimonials
        </h1>
    
        <ExprienceCard />
      </div>
    </div>
  );
}

export default Testimonials;
