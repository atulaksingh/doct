import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { ImQuotesRight } from "react-icons/im";
function ExprienceCard() {
  return (
    <>
      <div className="text-center  pt-10 pb-12 ">
        <div className="text-[2.5rem] lg:text-[3.75rem] lg:leading-[4.066rem] font-[700] text-[#142958] pb-10">
          Patient Experience
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
                <div>
                  <img
                    className="rounded-full mx-auto"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
                  />
                </div>
                <div className="font-[700] mt-1">Dj Dj Dj</div>
                <div>17,New York</div>
                <div className="border border-gray-300  mx-20 my-3"></div>
                <div className="pb-2">
                  <ImQuotesRight
                    className="mx-auto "
                    size={30}
                    color="#01cab8"
                  />
                </div>{" "}
                <div>
                  All of the personnel I came in contact with, went above and
                  beyond to help me with my medical problems. I am now enjoying
                  a more active lifestyle and no longer feel the discomfort in
                  chest.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
                <div>
                  <img
                    className="rounded-full mx-auto"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
                  />
                </div>
                <div className="font-[700] mt-1">Dj Dj Dj</div>
                <div>17,New York</div>
                <div className="border border-gray-300  mx-20 my-3"></div>
                <div className="pb-2">
                  <ImQuotesRight
                    className="mx-auto "
                    size={30}
                    color="#01cab8"
                  />
                </div>{" "}
                <div>
                  All of the personnel I came in contact with, went above and
                  beyond to help me with my medical problems. I am now enjoying
                  a more active lifestyle and no longer feel the discomfort in
                  chest.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
                <div>
                  <img
                    className="rounded-full mx-auto"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
                  />
                </div>
                <div className="font-[700] mt-1">Dj Dj Dj</div>
                <div>17,New York</div>
                <div className="border border-gray-300  mx-20 my-3"></div>
                <div className="pb-2">
                  <ImQuotesRight
                    className="mx-auto "
                    size={30}
                    color="#01cab8"
                  />
                </div>{" "}
                <div>
                  All of the personnel I came in contact with, went above and
                  beyond to help me with my medical problems. I am now enjoying
                  a more active lifestyle and no longer feel the discomfort in
                  chest.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-span-1 p-10 bg-white text-center border border-gray-200 shadow-lg rounded-md">
                <div>
                  <img
                    className="rounded-full mx-auto"
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683284387/testimonials_01_keyjvh.jpg"
                  />
                </div>
                <div className="font-[700] mt-1">Dj Dj Dj</div>
                <div>17,New York</div>
                <div className="border border-gray-300  mx-20 my-3"></div>
                <div className="pb-2">
                  <ImQuotesRight
                    className="mx-auto "
                    size={30}
                    color="#01cab8"
                  />
                </div>{" "}
                <div>
                  All of the personnel I came in contact with, went above and
                  beyond to help me with my medical problems. I am now enjoying
                  a more active lifestyle and no longer feel the discomfort in
                  chest.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ExprienceCard;
