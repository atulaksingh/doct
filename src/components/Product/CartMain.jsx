import React from "react";
import BgCard from "../Card/BgCard";

function CartMain() {
  return (
    <>
      <div>
        <BgCard  title="Cart" desp="Efficiently unleash cross-media information without cross-media value quickly max."  />
        <div className="bg-white text-text-black py-20">
          <div className="mx-5 lg:mx-16">
            <div className="md:block hidden">
              <div className=" py-4 border border-gray-300 flex flex-col md:flex-row justify-around align-middle items-center bg-[#f7f7f7]">
                <div>Product</div>
                <div className="flex justify-end gap-20">
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                </div>
              </div>

              <div className="py-6 border-b border-gray-300 flex justify-around align-middle items-center ">
                <div className="flex gap-20 align-middle items-center ">
                  <img
                    className="h-20 rounded-lg"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg"
                  />
                  <div>Product</div>
                </div>
                <div className="flex justify-between align-middle items-center gap-20">
                  <div>$350.00 </div>
                  <div className=" border border-gray-500">
                    <input className="w-28 p-5" type="number" />
                  </div>
                  <div className="font-bold text-gray-500">$350.00</div>
                </div>
              </div>

              <div className="py-4 px-10 border-b border-gray-300 flex justify-start align-middle items-center ">
                <div>
                  <input
                    class="appearance-none bg-transparent w-32 border-none  text-[#01cab8] mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Coupon code"
                    aria-label="Full name"
                  />
                </div>
                <div className="flex justify-end gap-10 ">
                  <div className="bg-[#01cab8] hover:text-[#01cab8] hover:bg-white cursor-pointer border border-[#01cab8]  p-2.5 text-white w-40 text-center">
                    Apply Coupon
                  </div>
                  <div className="bg-[#01cab8] p-2.5 text-white hover:text-[#01cab8] cursor-pointer border border-[#01cab8] hover:bg-white w-40 text-center">
                    Update Coupon
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold py-5 border-b-2 border-gray-500">
                  Cart totals
                </div>
                <div className="flex py-5 border-b border-gray-300 justify-between px-5">
                  <h1>Subtotal</h1>
                  <h1>$350.00</h1>
                </div>
                <div className="flex py-5 border-b border-gray-300 justify-between px-5">
                  <h1>Subtotal</h1>
                  <div className="text-end">
                    <h1>Enter your address to view shipping options.</h1>
                    <p className="text-left text-[#01cab8] cursor-pointer">
                      Calculate shipping
                    </p>
                  </div>
                </div>
                <div className="flex py-5 border-b-2 border-gray-500 justify-between px-5">
                  <h1>Total</h1>
                  <h1>$350.00</h1>
                </div>
              </div>

              <div>
                {" "}
                <div className="bg-[#01cab8] mx-auto mt-5 hover:text-[#01cab8] hover:bg-white cursor-pointer border border-[#01cab8]  p-2.5 text-white w-60 text-center">
                  PROCEED TO CHECKOUT
                </div>
              </div>
            </div>

            <div className="md:hidden block">
              <div>
                <img
                  className="h-full w-full mx-auto rounded-md"
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683721556/product_05-300x300_ve8jfg.jpg"
                />
                <div className="text-center my-7 border-b border-gray-200 pb-5">
                  <div className="font-bold my-1.5">
                    Product :
                    <span className="text-gray-600 font-[500]">
                      Doppler Ultrasound
                    </span>
                  </div>
                  <div className="font-bold my-1.5">
                    Price :
                    <span className="text-gray-600 font-[400]">$350.00</span>
                  </div>
                  <div className="font-bold my-1.5">
                    Quantity :
                    <span className="text-gray-600 font-[400]">
                      <input
                        type="number"
                        className="border border-gray-400 py-3 ml-2 px-10 w-24 "
                      />
                    </span>
                  </div>
                  <div className="font-bold my-1.5">
                    Subtotal :
                    <span className="text-gray-600 font-[400]">$350.00</span>
                  </div>
                </div>

                <div className="text-center my-7 border-b border-gray-200 pb-5">
                  <input
                    placeholder="Coupon code"
                    type="text"
                    className="w-full px-2 py-3"
                  />

                  <div className="bg-[#01cab8] hover:text-[#01cab8] mx-auto rounded-md hover:bg-white my-3 cursor-pointer border border-[#01cab8]  p-2.5 text-white w-40 text-center">
                    Apply Coupon
                  </div>
                  <div className="bg-[#01cab8]  p-2.5 text-white my-3 mx-auto rounded-md hover:text-[#01cab8] cursor-pointer border border-[#01cab8] hover:bg-white w-40 text-center">
                    Update Coupon
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold py-5 border-b-2 border-gray-500">
                    Cart totals
                  </div>
                  <div className="flex py-5 border-b border-gray-300 justify-center px-5">
                    <h1 className="font-bold">Subtotal :</h1>
                    <h1 className="text-gray-500">$350.00</h1>
                  </div>
                  <div className="flex flex-wrap py-5 border-b border-gray-300 justify-center align-top px-5">
                    <h1 className="font-bold">Subtotal :</h1>
                    <h1 className="text-gray-500">
                      Enter your address to view shipping options.
                    </h1>
                      <span className="text-[#01cab8] cursor-pointer">Calculate shipping</span>
                  </div>
                      <div className="flex py-5 border-b border-gray-300 justify-center px-5">
                    <h1 className="font-bold">Total :</h1>
                    <h1 className="font-bold">$350.00</h1>
                  </div>


                  <div className="bg-[#01cab8] mx-auto mt-5 hover:text-[#01cab8] hover:bg-white cursor-pointer border border-[#01cab8]  p-2.5 text-white w-60 text-center">
                  PROCEED TO CHECKOUT
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartMain;
