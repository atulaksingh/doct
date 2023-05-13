import React from "react";
import { TbCalendarEvent } from "react-icons/tb";

function AboutCard7() {
  return (
    <div>
      <div
        className="mx-5 lg:mx-16 py-10 rounded-lg"
        // style={{
        //   backgroundImage:
        //     "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1683355353/background_footer_01_f0jbex.jpg)",
        // }}
      >
        <div
          className=" text-white rounded-lg  py-14 w-full h-full bg-cover bg-top lg:overflow-x-hidden"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1683545009/image_action_02_inydmm.jpg)",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between align-middle items-center mx-5 lg:mx-10 ">
            <div>
              <h1 className="text-[.9375rem] lg:text-left text-center">
                We are always looking for talented people
              </h1>
              <h1 className="text-[2rem] text-center">Join Our Team Of Experts</h1>
            </div>
            <div className="border px-5 bg-[#142958] mt-2 p-5 border-[#142958] hover:bg-white hover:text-[#142958] cursor-pointer flex justify-between align-middle items-center gap-4">
              <h1>Submit Your CV</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard7;
