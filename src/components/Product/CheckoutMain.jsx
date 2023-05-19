import React from "react";
import BgCard from "../Card/BgCard";

function CheckoutMain() {
  return (
    <>
      <div>
        <BgCard  title="Checkout" desp="Efficiently unleash cross-media information without cross-media value quickly max." />
        <div className="bg-[#f3fcff] text-black ">
          <div className="mx-2 lg:mx-16 bg-white p-4 md:p-7 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="col-span-1">
                <h1 className="text-[1.4em] font-[600] my-5">
                  Billing details
                </h1>

                <div>
                  <form>
                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-1  font-medium text-gray-500 dark:text-white"
                      >
                        First name <span className="text-red-500">*</span>
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
                        Last name <span className="text-red-500">*</span>
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
                        Company name (optional){" "}
                        <span className="text-red-500">*</span>
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
                        Email address*
                      </label>
                      <input
                        type="email"
                        id="default-input"
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Country / Region *
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

                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-1  font-medium text-gray-500 dark:text-white"
                      >
                        Street address
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        placeholder="House number and street name"
                        required
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                      />

                      <input
                        type="text"
                        id="default-input"
                        placeholder="Apartment , suite, unit,etx"
                        required
                        class="bg-white border my-3 border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                      />
                    </div>

                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-1  font-medium text-gray-500 dark:text-white"
                      >
                        Postcode / ZIP
                        <span className="text-red-500">*</span>
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
                        Town / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="default-input"
                        required
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        State / County<span className="text-red-500">*</span>
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

                    <div class="mb-4">
                      <label
                        for="default-input"
                        class="block mb-1  font-medium text-gray-500 dark:text-white"
                      >
                        Phone
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="default-input"
                        required
                        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex justify-start gap-3 my-5">
                  <input type="checkbox" />
                  <div className="text-[1.4em] font-[600]">
                    Ship to a different address?
                  </div>
                </div>

                <div class="mb-6">
                  <label
                    for="default-input"
                    class="block mb-1  font-medium text-gray-500 dark:text-white"
                  >
                    Order notes (optional)
                  </label>
                  <textarea
                    type="text"
                    rows={3}
                    id="default-input"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm  block focus:outline-teal-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold py-5 ">Your order</div>
              <div className="flex py-5 shadow-md border border-gray-200 justify-between px-5 bg-[#f7f7f7]">
                <h1>Product</h1>
                <h1>Subtotal</h1>
              </div>

              <div className="flex py-5 border-b-2 border-gray-500 justify-between px-5">
                <h1>Subtotal</h1>
                <h1>$350.00</h1>
              </div>
              <div className="flex py-5 border-b border-gray-300 justify-between px-5">
                <h1>Subtotal</h1>
                <h1>$350.00</h1>
              </div>
              <div className="flex py-5 border-b border-gray-300 justify-between px-5">
                <h1>Shipping</h1>
                <div className="text-end">
                  <h1> Enter your address to view shipping options..</h1>
                </div>
              </div>
              <div className="flex py-5 border-b-2 border-gray-500 justify-between px-5">
                <h1>Total</h1>
                <h1>$350.00</h1>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex gap-2 py-1">
                <input type="radio" />
                <h1>Direct bank transfer</h1>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" />
                <h1>Direct bank transfer</h1>
              </div>
              <div className="flex gap-2 py-1">
                <input type="radio" />
                <h1>Direct bank transfer</h1>
              </div>

              <div className="bg-[#01cab8] mx-auto mt-10 hover:text-[#01cab8] hover:bg-white cursor-pointer border border-[#01cab8]  p-2.5 text-white w-40 text-center">
                Place Order
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutMain;
