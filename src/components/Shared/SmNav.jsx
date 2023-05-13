import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
let Links = [
  { name: "Physical Therapy", link: "/services/physical-therapy" },
  { name: "Massage Therapy", link: "/services/massage-therapy" },
  { name: "Chiropractic Therapy", link: "/services/chiropractic-therapy" },
  { name: "Work Injuries", link: "/services/work-injuries" },

];
let ShopLinks = [

  { name: "Chiropractic Therapy", link: "/services/chiropractic-therapy" },
  { name: "Work Injuries", link: "/services/work-injuries" },
  { name: "Clinical Pilates", link: "/services/clinical-pilates" },
  { name: "Sport Injuries", link: "/services/sport-injuries" },
];
function SmNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [isStart, setIsStart] = useState(false);
  const [shopStart, setShopStart] = useState(false);
  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar z-10 fixed top-0 left-0 right-0">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} color="black" />
          </Link>
          <img
            className="w-24 lg:w-28"
            src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683373489/logo_alt_04_zv9wsd.png"
          />
        </div>
        <nav className={sidebar ? "nav-menu z-10 active" : "nav-menu z-10"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle  ">
              <Link to="#" className="menu-baars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
              <img
                className="w-32 "
                src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1683966330/logo_white_1_kivaua.png"
              />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              
            </li>
            {/* <li>
              <div className="relative flex flex-col items-center w-full rounded-md">
                <div className="w-full">
                  <button
                    onClick={() => setIsStart((prev) => !prev)}
                    className=" p-1 w-full flex items-center justify-center font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white"
                  >
                    Services
                    {!isStart ? (
                      <AiIcons.AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiIcons.AiOutlineCaretUp className="h-8" />
                    )}
                  </button>
                </div>
                {isStart && (
                  <div className="bg-[#23b5d1]  absolute top-10 flex flex-col items-start rounded-sm  w-full z-30">
                    {Links.map((item, i) => (
                      <div className="w-full">
                        <Link to={item.link}>
                          <div className="flex w-full p-2 justify-center hover:bg-[#23b5d1] text-white cursor-pointer rounded-r-lg border-l-transparent">
                            <h3 className="font-bold">{item.name}</h3>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>

            <li>
              <div className="relative flex flex-col items-center w-full rounded-md">
                <div className="w-full">
                  <button
                    onClick={() => setShopStart((prev) => !prev)}
                    className=" p-1 w-full flex items-center justify-center font-bold text-[17px] text-white tracking-wider border-4 border-transparent  active:text-white"
                  >
                   blog
                    {!shopStart ? (
                      <AiIcons.AiOutlineCaretDown className="h-8" />
                    ) : (
                      <AiIcons.AiOutlineCaretUp className="h-8" />
                    )}
                  </button>
                </div>
                {shopStart && (
                  <div className="bg-[#23b5d1]  absolute top-10 flex flex-col items-start rounded-sm  w-full z-30">
                    {ShopLinks.map((item, i) => (
                      <div className="w-full">
                        <Link to={item.link}>
                          <div className="flex w-full p-2 justify-center hover:bg-[#23b5d1] text-white cursor-pointer ">
                            <h3 className="font-normal">{item.name}</h3>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li> */}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default SmNav;
