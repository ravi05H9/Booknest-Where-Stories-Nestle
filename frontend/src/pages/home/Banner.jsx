import { motion } from "framer-motion";
import React from "react";
import bannerImg from "../../assets/banner.png"; // Correct import for Vite

const Banner = () => {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full flex items-center md:justify-end"
        >
          <img 
            src={bannerImg} 
            alt="New Book Releases" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:w-1/2 w-full text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            New Releases <span className="text-yellow-300">This Week</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            It's time to update your reading list with some of the latest and greatest
            releases in the literary world. From <span className="font-semibold text-white">heart-pumping thrillers</span> to 
            <span className="font-semibold text-white"> captivating memoirs</span>, this week's new releases offer something for everyone.
          </p>

          {/* CTA Button with Hover Effects */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
