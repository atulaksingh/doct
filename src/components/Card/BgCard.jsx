import React from "react";

function BgCard() {
  return (
    <>
      <div>
        <div
          class="relative  w-full h-96 md:h-[100vh] bg-cover bg-top lg:overflow-x-hidden"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1683700504/featured_image_blog_p3gvd7.jpg)",
          }}
        >
          <div className="absolute  top-16 md:top-60 left-5 sm:left-20 text-white w-[60%] sm:w-[50%] lg:w-[45%]">
            <h1 className="text-[3rem] sm:text-[3.75rem] lg:text-[4.75rem] font-[700]">Portfolio</h1>
            <div className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem]">
              Nanotechnology immersion along the information highway will close
              the loop solely.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgCard;
