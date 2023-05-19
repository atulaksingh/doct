import React from "react";
import BgCard from "../components/Card/BgCard";
import { TbBrandTelegram, TbCalendarEvent } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

function GridPostPage() {
  return (
    <>
      <div
        class="relative  w-full h-96  bg-cover bg-center lg:overflow-x-hidden"
        style={{
          backgroundImage:
            "url( https://res.cloudinary.com/dt0j68vdr/image/upload/v1683713614/post_11-160x160_ijevgo.jpg)",
        }}
      >
        <div className="bg-[rgba(0,0,0,.07)] absolute top-0 h-96 w-full px-16    text-white" style={{backgroundColor:"rgba(0,0,0,.5)"}}>
         
      <div className="mt-20">
      <div className="flex justify-start gap-2 align-middle items-center">
      HEALTH
      <span><BsDot size={20} color="#01cab8" /></span>
      VASCULAR
      </div>
      <div className="text-[3.75rem] font-[700]">What Causes High Blood Pressure?</div>
          <div className="text-[1.375rem] font-[600]">April 10, 2018</div>
      </div>
        </div>
      </div>
      <div className="grid grid-cols-12 px-16 bg-white gap-5 py-20">
        <div className="col-span-9">
          <div className="text-[1.375em] font-[500] py-5">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
            Dramatically maintain clicks-and-mortar solutions without functional
            solutions.
          </div>
          <div className="font-[400] leading-7 text-[#181818] py-5">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate resource-leveling customer
            service for state of the art customer service. Objectively innovate
            empowered manufactured products whereas parallel platforms.
            Holisticly predominate extensible testing procedures for reliable
            supply chains. Dramatically engage top-line web services vis-a-vis
            cutting-edge deliverables. Proactively envisioned multimedia based
            expertise and cross-media growth strategies. Seamlessly visualize
            quality intellectual capital without superior collaboration and
            idea-sharing. Holistically pontificate installed base portals after
            maintainable products.
          </div>
          <div className="font-[400] leading-7 text-[#181818]">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate resource-leveling customer
            service for state of the art customer service. Objectively innovate
            empowered manufactured products whereas parallel platforms.
            Holisticly predominate extensible testing procedures for reliable
            supply chains. Dramatically engage top-line web services vis-a-vis
            cutting-edge deliverables. Proactively envisioned multimedia based
            expertise and cross-media growth strategies. Seamlessly visualize
            quality intellectual capital without superior collaboration and
            idea-sharing. Holistically pontificate installed base portals after
            maintainable products.
          </div>

          <div className="border-t border-gray-300 py-10 mt-5">
            <div className="text-[1.5em]">Leave a Reply</div>
            <label
              for="default-input"
              class="block my-4  font-medium text-gray-500 dark:text-white"
            >
              Your email address will not be published. Required fields are
              marked *
            </label>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-1  font-medium text-gray-500 dark:text-white"
              >
                Order notes (optional)
              </label>
              <textarea
                type="text"
                rows={6}
                id="default-input"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              />
            </div>

            <div class="mb-4">
              <label
                for="default-input"
                class="block mb-1  font-medium text-gray-500 dark:text-white"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="default-input"
                required
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              />
            </div>
            <div class="mb-4">
              <label
                for="default-input"
                class="block mb-1  font-medium text-gray-500 dark:text-white"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="default-input"
                required
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              />
            </div>
            <div class="mb-4">
              <label
                for="default-input"
                class="block mb-1  font-medium text-gray-500 dark:text-white"
              >
                website<span className="text-red-500"></span>
              </label>
              <input
                type="email"
                id="default-input"
                required
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              />
            </div>
            <div className="flex justify-start gap-3 my-5">
              <input type="checkbox" />
              <div className="text-base ">
                Save my name, email, and website in this browser for the next
                time I comment.
              </div>
            </div>
            <div className="w-48">
              <div className="border px-2 py-3  border-[#01cab8] cursor-pointer bg-[#01cab8]  text-white flex justify-around align-middle items-center gap-1 ">
                <TbBrandTelegram size={22} color="" className="" />
                <h1 className="uppercase">Post comment </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="col-span-1">
            <div className="flex  justify-start align-middle items-center">
              <div class="md:w-2/3">
                <input
                  class="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#01cab8]"
                  id="inline-full-name"
                  type="text"
                  value=""
                  placeholder="Looking for....."
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-black hover:text-[#01cab8] rounded-lg border  focus:ring-4 focus:outline-none "
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="text-[1.3em] font-[600] my-5">Recent Posts</div>
            <div className="flex justify-start gap-2 align-middle items-center my-2">
              <img
                className="h-32 lg:h-20 rounded-lg"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683713614/post_11-160x160_ijevgo.jpg"
              />
              <div>
                <h1 className="text-[.875rem] font-[700] text-[#01cab8]">
                  APRIL 10, 2018
                </h1>
                <h1 className="text-base font-[700] hover:text-[#01cab8] cursor-pointer">
                  What Causes High Blood Pressure?
                </h1>
              </div>
            </div>
            <div className="flex justify-start gap-2 align-middle items-center my-2">
              <img
                className="h-32 lg:h-20 rounded-lg"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683713614/post_11-160x160_ijevgo.jpg"
              />
              <div>
                <h1 className="text-[.875rem] font-[700] text-[#01cab8]">
                  APRIL 10, 2018
                </h1>
                <h1 className="text-base font-[700] hover:text-[#01cab8] cursor-pointer">
                  What Causes High Blood Pressure?
                </h1>
              </div>
            </div>
            <div className="flex justify-start gap-2 align-middle items-center my-2">
              <img
                className="h-32 lg:h-20 rounded-lg"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683713614/post_11-160x160_ijevgo.jpg"
              />
              <div>
                <h1 className="text-[.875rem] font-[700] text-[#01cab8]">
                  APRIL 10, 2018
                </h1>
                <h1 className="text-base font-[700] hover:text-[#01cab8] cursor-pointer">
                  What Causes High Blood Pressure?
                </h1>
              </div>
            </div>
            <div className="flex justify-start gap-2 align-middle items-center my-2">
              <img
                className="h-32 lg:h-20 rounded-lg"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683713614/post_11-160x160_ijevgo.jpg"
              />
              <div>
                <h1 className="text-[.875rem] font-[700] text-[#01cab8]">
                  APRIL 10, 2018
                </h1>
                <h1 className="text-base font-[700] hover:text-[#01cab8] cursor-pointer">
                  What Causes High Blood Pressure?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridPostPage;
