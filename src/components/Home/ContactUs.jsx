import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { RiCalendarCheckLine, RiShareForwardLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
function ContactUs() {
  return (
    <>
      <div className=" bg-white py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-16 ">
          <div className="col-span-1 my-16">
            <h1 className="text-[1.125rem] text-[#23b5d1] font-[600] py-2">
              Contact Us
            </h1>
            <div className="text-[2.8rem] sm:text-[3.75rem] leading-[3.5rem] sm:leading-[4.066rem] font-[700] text-[#1d1e21] ">
              Comprenhesive Dental Care
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 py-10 sm:gap-1 gap-5">
              <div className="col-span-1">
                <div className="">
                  <HiOutlineLocationMarker size={30} color="#23b5d1" />
                  <div className="text-[1rem] font-[500] py-1">Location</div>
                  <div>
                    New York 60 East <br /> 65th Street <br /> NY 10065
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <div className="">
                  <HiOutlineLocationMarker size={30} color="#23b5d1" />
                  <div className="text-[1rem] font-[500] py-1">Hours</div>
                  <div>
                    Mon-Wed: 8am – 7pm <br /> Thursday: 8am – 9pm <br /> Friday:
                    8am – 5pm
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="">
                  <RiShareForwardLine size={30} color="#23b5d1" />
                  <div className="text-[1rem] font-[500] py-1">Social</div>
                  <div>
                    <div className="flex justify-start align-middle items-center gap-2">
                      <FaFacebookF size={12} />
                      <div>Facebook</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-start align-middle items-center gap-2">
                      <AiFillInstagram size={12} />
                      <div>Facebook</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-start align-middle items-center gap-2">
                      <BsTwitter size={12} />
                      <div>Twitter</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start gap-10 py-10">
              <div className="">
                <div>Make an Appointment</div>
                <div className="flex justify-start align-middle items-center gap-2">
                  <BiPhone size={30} color="#23b5d1" />
                  <div className="text-[#23b5d1] font-bold text-[2em]">
                    88 700 600
                  </div>
                </div>
              </div>
              <div>
                <div>Online Schedule</div>
                <div className="flex justify-start align-middle items-center gap-2">
                  <RiCalendarCheckLine size={35} color="#23b5d1" />
                  <div className="text-[#23b5d1] font-bold text-[2em]">
                    Book here
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="bg-[#edf8fd] p-4 md:p-10">
              <div className="text-[2rem] font-[400] text-gray-600">
                Send us a message
              </div>
              <div className="text-[1.125rem] font-[600] py-2">
                Required fields are marked with an asterisk (*).
              </div>
              <div>
                <form>
                  <div class="mb-6">
                    <label
                      for="default-input"
                      class="block mb-1  font-medium text-gray-500 dark:text-white"
                    >
                      First and Last name*
                    </label>
                    <input
                      type="text"
                      id="default-input"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="default-input"
                      class="block mb-1  font-medium text-gray-500 dark:text-white"
                    >
                      Email address*
                    </label>
                    <input
                      type="email"
                      id="default-input"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      for="countries"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select an option
                    </label>
                    <select
                      id="countries"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:outline-teal-500  focus:ring-[#23b5d1] focus:border-[#23b5d1] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#23b5d1] dark:focus:border-[#23b5d1]"
                    >
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <div class="mb-6">
                    <label
                      for="default-input"
                      class="block mb-1  font-medium text-gray-500 dark:text-white"
                    >
                      Additional notes
                    </label>
                    <textarea
                      type="text"
                      rows={6}
                      id="default-input"
                      class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                    />
                  </div>
                  <button className="w-full border border-white py-3 px-6 font-[500] bg-[#01cab8] text-white hover:bg-[#fff] hover:text-[#02e2be]">
                    Meet Our Team
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
