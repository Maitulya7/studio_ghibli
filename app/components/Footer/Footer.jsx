import Image from "next/image";
import React from "react";
import imageSource from "@/public/footerImg.png";
import SocialMediaIcons from "./SocialMediaIcons";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-black text-white flex justify-between px-12 py-20">
        <div className="hidden md:block">
          <Image src={imageSource} className="w-full md:h-full" alt="/" />
        </div>
        <div className="flex flex-col gap-5 w-[25%] md:w-[10%] ">
          <h1 className="font-bold text-base md:text-2xl">Links</h1>
          <p>Home</p>
          <p>Movies</p>
          <p>About Us</p>
          <p>Gallery</p>
          <p>How to Download</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-base md:text-2xl mb-6">Contact</h1>
          <ContactUs />
        </div>
        <div className="flex  flex-col text-center ">
          <h1 className="font-bold text-base md:text-2xl mb-6">Social Media</h1>
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
};

export default Footer;
