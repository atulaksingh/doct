import React from "react";
import GridCard from "./GridCard";
import BgCard from "../Card/BgCard";

function GridMain() {
  return (
    <>
    <div>
    <BgCard />
    </div>
      <div className="bg-white ">
        <div className="py-20">
          <div className=" flex flex-wrap justify-center  align-middle uppercase items-center gap-10">
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              Home
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              About
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              Home
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              About
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              Home
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              About
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              Home
            </h1>
            <h1 className="cool-link text-[o.875rem] text-[#142958] font-[300] cursor-pointer">
              About
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 lg:mx-16 gap-10 mt-10">
            <div className="col-span-1">
              <GridCard />
            </div>

            <div className="col-span-1">
            <GridCard />
            </div>
            <div className="col-span-1">
            <GridCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GridMain;
