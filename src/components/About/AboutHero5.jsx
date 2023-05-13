import React from "react";
import { ImQuotesRight } from "react-icons/im";

function AboutHero5() {
  return (
    <>
      <div>
        <div className="lg:mr-16 pt-10">
         
          <div className="grid grid-cols-12 lg:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <img
                className="w-96 lg:w-full"
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683535920/inner_team_01_gb9zzc.png"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 mx-5 lg:mx-0">
              <div className="my-5 lg:my-28 lg:w-96">
                <div>
                  {" "}
                  <ImQuotesRight size={50} color="#01cab8" />
                </div>
                <div className="font-[IBM Plex Seri] italic text-[2rem] font-[italic] font-[400]  leading-9 py-5 text-[#1f3360]">
                Our multidisciplinary team works together to ensure a safe and swift journey through the medical department.
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683537677/signature_03_iliils.png" />
                </div>
                <div>Betty Ballesteros Rendon</div>
                <p>— Dental Implants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero5;
