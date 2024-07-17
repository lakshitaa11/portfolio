"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FaArrowAltCircleDown } from "react-icons/fa"; // Import the arrow icon
import Image from "next/image";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const HeroContent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleGetInTouchClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <motion.div
      initial="Hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span role="img" aria-label="Namaste emoji">
            Namaste{" "}🙏🏼
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Lakshita this side
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Developer and a tech enthusiast having a keen interest in
          developing applications and simplifying user experience.
        </motion.p>

        <motion.div className="flex gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center gap-1"
            href="/resume.pdf"  // Path to your resume file
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume </span> <FaArrowAltCircleDown size={18} />
          </motion.a>
          <motion.button
            variants={slideInFromLeft(1)}
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            onClick={handleGetInTouchClick}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="h-full w-full flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          style={{ rotate: "5deg" }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            ease: "linear",
            loop: Infinity,
            repeatDelay: 5,
          }}
        >
          <Image
            src="/profile1.svg"
            alt="work icons"
            height={550}
            width={550}
          />
        </motion.div>
      </motion.div>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-[400px] w-full">
            <h2 className="text-2xl font-bold mb-4">Thanks for wanting to connect!</h2>
            <p className="mb-4">You can reach me through mail or my social handles:</p>
            <div className="flex justify-center gap-8 mb-8">
              <a href="https://www.linkedin.com/in/lakshita11/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://github.com/lakshitaa11" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-gray-800 hover:text-black" />
              </a>
              <a href="https://www.youtube.com/@lakshita7297" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} className="text-indigo-600 hover:text-indigo-800" />
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <button
                className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-white hover:text-blue-500 border border-blue-500 transition-colors"
                onClick={handleClosePopup}
              >
                Go Back
              </button>
              <a
                className="py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors"
                href="mailto:lakshita008@gmail.com"
              >
                Mail Me
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HeroContent;
