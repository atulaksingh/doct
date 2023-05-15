import React from "react";
import { TbCalendarEvent } from "react-icons/tb";

function HeroCard() {
  return (
    <div>
    

      <div className="px-5 lg:px-16 bg-white ">
        <div className="lg:mx-0  bg-white text-black w-full lg:w-[70%] p-5 rounded-lg  ">
          <div className="sm:flex flex-col sm:gap-0 gap-4 sm:flex-row sm:justify-between align-middle items-start sm:items-center">
            <div>
              <img
                className="rounded-full"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683880783/dr_04_vlwidg.jpg"
              />
            </div>
            <div className="">
              <div className="w-full sm:py-0 py-3 sm:mb-0 mb-5">
                <label
                  for="countries"
                  class="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  MAKE AN APPOINTMENT FOR:
                </label>
                <select
                  id="countries"
                  class="bg-white border-b-2 border-[#23b5d1] text-gray-900 text-sm  block w-full sm:w-72 md:w-96 p-2.5  dark:placeholder-gray-400 focus:outline-none"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div className="border px-5 py-3 border-[#01cab8] cursor-pointer bg-[#01cab8] hover:bg-white text-white hover:text-[#01cab8] flex justify-between align-middle items-center gap-4 ">
              <TbCalendarEvent size={22} color="" className="" />
              <h1>Book Dental </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
