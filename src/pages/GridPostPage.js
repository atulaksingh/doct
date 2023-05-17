import React from "react";
import BgCard from "../components/Card/BgCard";

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
        <div className="h-40">
          {/* <BgCard /> */}

          <div></div>
        </div>
      </div>
    </>
  );
}

export default GridPostPage;
