import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { TbCalendarEvent } from "react-icons/tb";
function Header() {
  return (
    <>
      <div className="bg-white">
        <div className="flex gap-10 mx-5">
          <div>
            <img
              className="w-28"
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683373489/logo_alt_04_zv9wsd.png"
            />
          </div>
          <div className=" flex justify-between w-full align-middle items-center">
            <div className=" flex justify-start  align-middle items-center gap-10">
              <h1 className="text-[17px] font-[400] cursor-pointer">Home</h1>
              <h1 className="text-[17px] font-[400] cursor-pointer">Home</h1>
              <h1 className="text-[17px] font-[400] cursor-pointer">Home</h1>
              <h1 className="text-[17px] font-[400] cursor-pointer">Home</h1>
            </div>
            <div>
              <div className=" flex justify-between w-full align-middle items-center gap-5">
                <RiSearchLine size={20} className="cursor-pointer" />
                <HiOutlineLocationMarker size={20} className="cursor-pointer"/>
                <div className="border px-5 py-3 border-[#01cab8] cursor-pointer bg-[#01cab8] hover:bg-white text-white hover:text-[#01cab8] flex justify-between align-middle items-center gap-4">
                  <TbCalendarEvent size={22} color="" className="" />
                  <h1>Book Dental Exam</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
