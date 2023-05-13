import React from "react";
import AboutHero from "./AboutHero";
import AboutHero2 from "./AboutHero2";
import AboutHero3 from "./AboutHero3";
import AboutHero4 from "./AboutHero4";
import ExprienceCard from "../Card/ExprienceCard";
import AboutHero5 from "./AboutHero5";
import AboutHero6 from "./AboutHero6";
import Header from "../Shared/Header";
import AboutCard7 from "./AboutCard7";
import Footer from "../Shared/Footer";

function AboutMain() {
  return (
    <>
      <div>
      <Header />
        <AboutHero />
        <AboutHero2 />
        <AboutHero3 />
        <AboutHero4 />
        <AboutHero5 />
        <div className=" px-5  lg:px-16 pt-10 bg-[#e7f6fd]">

        <ExprienceCard />
        </div>
        <AboutHero6 />
        <AboutCard7 />
        <Footer />
      </div>
    </>
  );
}

export default AboutMain;
