import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
// import codingGif from "../assets/download.gif";
import resumePDF from '../assets/sachinresume2709.pdf';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
      {/* 🔁 Background GIF */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src={codingGif}
          alt="Coding Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div> */}

      {/* 🔳 Main Content */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
        className="z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-10 text-center"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-800 dark:text-white">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Sachin Mishra
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300">
            Full Stack Developer | Java Backend | Problem Solver
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={resumePDF} // Update with your resume path 
              download
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white 
              dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default Hero;
