import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { BsArrowRightShort } from "react-icons/bs";
function Map() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey:
  });
  return (
    <>
      <div className="lg:bg-transparent bg-[#e7f6fd] ">
        <div className="relative w-full ">
          <iframe
            width="100%vw"
            height="800"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=595&amp;height=411&amp;hl=en&amp;q=sdf%2040026+(sf)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="lg:absolute lg:top-28 lg:left-16 lg:mt-0 mt-5 lg:mx-0 mx-5">
            <div className="lg:w-96 bg-white shadow-sm hover:shadow-sml hover:transition-all hover:delay-75 hover:ease-in-out border border-gray-100  rounded-xl">
              <div>
                <img
                  className="w-full h-72 rounded-t-xl "
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683198590/card_image_home_03-02_jq5n2i.jpg"
                />
                <div className="p-6 ">
                  <div className="border-b pb-3 border-gray-300">
                    <h1 className="font-bold py-1">Location</h1>
                    <p className="text-gray-600">
                      60 East 65th Street, New York
                    </p>
                  </div>
                  <div className="border-b pb-3 border-gray-300">
                    <h1 className="font-bold py-1">Phone</h1>
                    <p className="text-gray-600">
                    1-800-100-900
                    </p>
                  </div>
                  <div className=" pb-3 ">
                    <h1 className="font-bold py-1">Email</h1>
                    <p className="text-[#01cab8]">
                    appointement@cliniq.com
                    </p>
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

export default Map;
