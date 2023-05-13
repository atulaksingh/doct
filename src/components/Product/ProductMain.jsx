import React from "react";
import BgCard from "../Card/BgCard";
import { BsDot } from "react-icons/bs";

function ProductMain() {
  return (
    <>
      <div>
        <BgCard />
        <div className="py-20 bg-white">
          <div className="grid grid-cols-12 mx-5 lg:mx-16  mt-10 lg:gap-10">
            <div className="col-span-12 lg:col-span-9">
              <div className="flex flex-col lg:flex-row justify-between align-middle  lg:items-center lg:gap-0 gap-5 w-full">
              <h1>Showing 1–9 of 10 results</h1>
                <div className=" lg:w-96">
                 
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
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 ">
                <div className="col-span-1 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer transition-all ease-in-out delay-150">
                  <img className="w-full" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg" />
                  <div className="px-5 py-8">
                    <h1 className="text-[1rem] font-[700] text-[#01cab8] py-1">
                      DIAGNOSTIC
                    </h1>
                    <div className="text-[2rem] font-[700] leading-9 ">
                      Bidirectional Doppler
                    </div>
                    <div className="text-[1.375rem] font-[600] py-4">
                      $280.00
                    </div>
                    <div className="bg-[#01cab8] cursor-pointer w-full text-center  py-2.5   text-white">
                      Add to Cart
                    </div>
                  </div>
                </div>
                <div className="col-span-1 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer transition-all ease-in-out delay-150">
                  <img className="w-full" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg" />
                  <div className="px-5 py-8">
                    <h1 className="text-[1rem] font-[700] text-[#01cab8] py-1">
                      DIAGNOSTIC
                    </h1>
                    <div className="text-[2rem] font-[700] leading-9 ">
                      Bidirectional Doppler
                    </div>
                    <div className="text-[1.375rem] font-[600] py-4">
                      $280.00
                    </div>
                    <div className="bg-[#01cab8] cursor-pointer w-full text-center  py-2.5   text-white">
                      Add to Cart
                    </div>
                  </div>
                </div>
                <div className="col-span-1 border border-gray-200 rounded-lg hover:shadow-lg cursor-pointer transition-all ease-in-out delay-150">
                  <img className="w-full" src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg" />
                  <div className="px-5 py-8">
                    <h1 className="text-[1rem] font-[700] text-[#01cab8] py-1">
                      DIAGNOSTIC
                    </h1>
                    <div className="text-[2rem] font-[700] leading-9 ">
                      Bidirectional Doppler
                    </div>
                    <div className="text-[1.375rem] font-[600] py-4">
                      $280.00
                    </div>
                    <div className="bg-[#01cab8] cursor-pointer w-full text-center  py-2.5   text-white">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3">
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

              {/* ////Cart section /// */}
              <div className="py-5">
                <h1 className="text-xl font-[600]">Cart</h1>
                <p className="text-gray-500">No products in the cart.</p>
              </div>

              <div className="text-[1.3em] font-[600] my-5">Products</div>
              <div className="flex justify-start gap-2 align-middle items-center py-3 border-b border-gray-200">
                <img
                  className="h-32 lg:h-16 rounded-lg"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg"
                />
                <div>
                  <h1 className="text-[1rem] font-[700] ">Pressure Monitor</h1>
                  <h1 className="text-sm font-[700] cursor-pointer">$350.00</h1>
                </div>
              </div>
              <div className="flex justify-start gap-2 align-middle items-center py-3 border-b border-gray-200">
                <img
                  className="h-32 lg:h-16 rounded-lg"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg"
                />
                <div>
                  <h1 className="text-[1rem] font-[700] ">Pressure Monitor</h1>
                  <h1 className="text-sm font-[700] cursor-pointer">$350.00</h1>
                </div>
              </div>
              <div className="flex justify-start gap-2 align-middle items-center py-3 border-b border-gray-200">
                <img
                  className="h-32 lg:h-16 rounded-lg"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg"
                />
                <div>
                  <h1 className="text-[1rem] font-[700] ">Pressure Monitor</h1>
                  <h1 className="text-sm font-[700] cursor-pointer">$350.00</h1>
                </div>
              </div>
              <div className="flex justify-start gap-2 align-middle items-center py-3 border-b border-gray-200">
                <img
                  className="h-32 lg:h-16 rounded-lg"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg"
                />
                <div>
                  <h1 className="text-[1rem] font-[700] ">Pressure Monitor</h1>
                  <h1 className="text-sm font-[700] cursor-pointer">$350.00</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductMain;
