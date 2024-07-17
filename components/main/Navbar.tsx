"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const octopusImages = [
    "/octopus1.svg",
    "/octopus2.svg",
    "/octopus3.svg",
    "/octopus4.svg",
    "/octopus5.svg",
    "/octopus6.svg",
    "/octopus7.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % octopusImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [octopusImages.length]);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="h-full w-full flex flex-row justify-between items-center m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src={octopusImages[currentImageIndex]}
            alt="logo"
            height={70}
            width={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Lakshita Shekhawat
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#2A0E61] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer justify-center items-center"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="cursor-pointer justify-center items-center"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer justify-center items-center"
            >
              Projects
            </a>
            {/* <a
              href="#contact"
              className="cursor-pointer justify-center items-center"
            >
              Contact Me
            </a> */}
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
