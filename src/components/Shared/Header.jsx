import React from "react";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { TbCalendarEvent } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import Hidenav from "./Hidenav";
import SmNav from "./SmNav";
function Header() {
  const [status, setStatus] = useState(false);

  const navtoggle = () => {
    setStatus(false);
  };

  return (
    <>
      <div className="lg:hidden block">
        <SmNav />
      </div>
      {/* <div className="">{status ? <Hidenav nav={navtoggle} /> : null}</div> */}
      <div className="bg-transparent lg:bg-white relative lg:block hidden">
        <div className="bg-white fixed top-0 left-0 right-0 z-10">
          <div className="flex gap-5 lg:gap-10 mx-5 ">
            <div
              className="stroke-black w-20 duration-500 hover:stroke-green-300 cursor-pointer lg:hidden block mt-1"
              onClick={() => setStatus(true)}
            >
              <svg viewBox="0 0 512 512">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M96 256h320M96 176h320M96 336h320"
                ></path>
              </svg>
            </div>
            <div>
              <img
                className="w-36 lg:w-28"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683373489/logo_alt_04_zv9wsd.png"
              />
            </div>
            <div className="  flex justify-between w-full align-middle items-center">
              <div className=" flex justify-start  align-middle uppercase items-center gap-10">
                <Link to={"/"}>
                  <a
                    className="text-[17px] font-[400] cursor-pointer hidden lg:block"
                    href="/"
                  >
                    Home
                  </a>
                </Link>
                <Link to={"/about"}>
                  <a
                    href="/about"
                    className="text-[17px] font-[400] cursor-pointer hidden lg:block"
                  >
                    About
                  </a>
                </Link>
                <div class="group inline-block relative ">
                  <button class=" py-2  rounded inline-flex  text-[17px] font-[400]  cursor-pointer ">
                    <span class="">PAGES</span>
                  </button>
                  <ul class="absolute hidden bg-white text-black pt-2 group-hover:block z-30 w-[50vw]">
                    <div className="grid grid-cols-3">
                      <div className="col-span-1 mx-3 uppercase">
                        {" "}
                        <li class="">
                          <a
                            class="border-b-4 border-[#01cab8] rounded-t text-[#01cab8] bg-white py-3.5  block whitespace-no-wrap font-[700] text-[14px]"
                            href="#"
                          >
                            BLOG
                          </a>
                        </li>
                        <li class="">
                          <Link to={"/pages/gridview"}>
                            <a
                              class=" py-3.5  border-b border-gray-300 hover:text-[#01cab8] block whitespace-no-wrap font-[700] text-[14px]"
                              href="/pages/grid-layout"
                            >
                              Grid view
                            </a>
                          </Link>
                        </li>
                      </div>
                      <div className="col-span-1 mx-3 ">
                        {" "}
                        <li class="">
                          <a
                            class="border-b-4 border-[#01cab8] rounded-t text-[#01cab8] bg-white py-3.5  block whitespace-no-wrap font-[700] text-[14px]"
                            href="#"
                          >
                            portfolio
                          </a>
                        </li>
                        <li class="">
                          <Link to={"/pages/columns"}>
                            <a
                              class=" py-3.5  border-b border-gray-300 hover:text-[#01cab8] block whitespace-no-wrap font-[700] text-[14px]"
                              href="/blog/grid-layout"
                            >
                              columns view
                            </a>
                          </Link>
                        </li>
                      </div>
                      <div className="col-span-1 mx-3 ">
                        {" "}
                        <li class="">
                          <a
                            class="border-b-4 border-[#01cab8] rounded-t text-[#01cab8] bg-white py-3.5  block whitespace-no-wrap font-[700] text-[14px]"
                            href="#"
                          >
                            shop
                          </a>
                        </li>
                        <li class="">
                          <Link to={"/shop/products"}>
                            <a
                              class=" py-3.5  border-b border-gray-300 hover:text-[#01cab8] block whitespace-no-wrap font-[700] text-[14px]"
                              href="/blog/grid-layout"
                            >
                              products
                            </a>
                          </Link>
                        </li>
                        <li class="">
                          <Link to={"/shop/cart"}>
                            <a
                              class=" py-3.5  border-b border-gray-300 hover:text-[#01cab8] block whitespace-no-wrap font-[700] text-[14px]"
                              href="/blog/grid-layout"
                            >
                              cart
                            </a>
                          </Link>
                        </li>
                        <li class="">
                          <Link to={"/shop/checkout"}>
                            <a
                              class=" py-3.5  border-b border-gray-300 hover:text-[#01cab8] block whitespace-no-wrap font-[700] text-[14px]"
                              href="/blog/grid-layout"
                            >
                              checkout
                            </a>
                          </Link>
                        </li>
                        <li class="">
                          <Link to={"/shop/my-account"}>
                            <a
                              class=" py-3.5  border-b border-gray-300 hover:text-[#01cab8] block whitespace-no-wrap font-[700] text-[14px]"
                              href="/blog/grid-layout"
                            >
                              my accounts
                            </a>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
              <div>
                <div className=" flex justify-between w-full align-middle items-center gap-5 ">
                  <RiSearchLine
                    size={20}
                    className="cursor-pointer hidden lg:block"
                  />
                  <HiOutlineLocationMarker
                    size={20}
                    className="cursor-pointer hidden lg:block"
                  />
                  <div className="lg:block hidden">
                    <div className="border px-5 py-3 border-[#01cab8] cursor-pointer bg-[#01cab8] hover:bg-white text-white hover:text-[#01cab8] flex justify-between align-middle items-center gap-4 ">
                      <TbCalendarEvent size={22} color="" className="" />
                      <h1>Book Dental </h1>
                    </div>
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

export default Header;
