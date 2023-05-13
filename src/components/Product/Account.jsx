import React from "react";
import BgCard from "../Card/BgCard";

function Account() {
  return (
    <>
      <div>
        <div>
          <BgCard />
        </div>
        <div className="bg-[#f3fcff] text-black ">
          <div className="mx-2 lg:mx-16 bg-white p-4  md::p-7 ">
            <div className="text-[2.5em] font-[700]">Login</div>
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

              <div className="flex gap-2 text-gray-600">
                <h1>
                  <input type="checkbox" />
                </h1>
                <div>Remember me</div>
              </div>
            </form>
            <div className="bg-[#01cab8]  mt-1 hover:text-[#01cab8] hover:bg-white cursor-pointer border border-[#01cab8]  p-2.5 text-white w-28 text-center">
              LOG IN
            </div>
            <div className="text-[#01cab8] hover:text-black cursor-pointer mt-2">
              Lost your password?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
