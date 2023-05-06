import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
function Appointment() {
  return (
    <div className=" bg-white">
      <div className="container mx-auto py-10 ">
        <div className="grid grid-cols-3 gap-10 mx-14">
          <div className="col-span-1 shadow-md hover:shadow-2xl hover:transition-all hover:delay-75 hover:ease-in-out border border-gray-100  rounded-xl">
            <div>
              <img
                className="w-full h-60 rounded-t-xl "
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683198590/card_image_home_03-02_jq5n2i.jpg"
              />
              <div className="p-5 mb-5">
                <div className="text-[40px] font-[700] leading-10 py-2">
                  Whitening and polishing
                </div>
                <p className="text-gray-400 my-2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </p>
                <div className="flex text-[#01cab8] justify-start align-middle items-center gap-1">
                  <div className="">Read More </div>
                  <div className="mt-1">
                    <BsArrowRightShort size={20}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 shadow-md hover:shadow-2xl hover:transition-all hover:delay-75 hover:ease-in-out border border-gray-100  rounded-xl">
            <div>
              <img
                className="w-full h-60 rounded-t-xl "
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683198590/card_image_home_03-02_jq5n2i.jpg"
              />
              <div className="p-5">
                <div className="text-[40px] font-[700] leading-10 py-2">
                  Whitening and polishing
                </div>
                <p className="text-gray-400 my-2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </p>
                <div className="flex text-[#01cab8] justify-start align-middle items-center gap-1">
                  <div className="">Read More </div>
                  <div className="mt-1">
                    <BsArrowRightShort size={20}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 shadow-md hover:shadow-2xl hover:transition-all hover:delay-75 hover:ease-in-out border border-gray-100  rounded-xl">
            <div>
              <img
                className="w-full h-60 rounded-t-xl "
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683198590/card_image_home_03-02_jq5n2i.jpg"
              />
              <div className="p-5">
                <div className="text-[40px] font-[700] leading-10 py-2">
                  Whitening and polishing
                </div>
                <p className="text-gray-400 my-2">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document
                </p>
                <div className="flex text-[#01cab8] justify-start align-middle items-center gap-1">
                  <div className="">Read More </div>
                  <div className="mt-1">
                    <BsArrowRightShort size={20}/>
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

export default Appointment;
