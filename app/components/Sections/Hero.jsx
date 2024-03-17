"use client";
import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import videoSource from "@/public/bgVideo.mp4";
import imageSource from "@/public/bgImg.png";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const heroRef = useRef(null);

  return (
    <>
      <div ref={heroRef} className=" w-full h-screen">
        <div
          className="w-full h-screen "
          onMouseEnter={() => setShowVideo(true)}
          onMouseLeave={() => setShowVideo(false)}
        >
          {showVideo ? (
            <>
              <video
                autoPlay
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          ) : (
            <Image
              src={imageSource}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="/"
            />
          )}
        </div>
      </div>
    
    </>
  );
};

export default Hero;
