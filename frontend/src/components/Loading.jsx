import { motion } from "framer-motion";
import React from "react";

const Loading = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-bl from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
      {/* Background Floating Lights */}
      <motion.div
        className="absolute w-96 h-96 bg-white opacity-20 rounded-full blur-[150px]"
        animate={{ x: [0, 200, -200, 0], y: [0, -200, 200, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-white opacity-15 rounded-full blur-[120px]"
        animate={{ x: [100, -100, 100], y: [-100, 100, -100] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Hypnotic Neon Ring Spinner */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-24 h-24 border-8 border-transparent border-t-white border-b-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div
          className="absolute w-28 h-28 border-4 border-white opacity-30 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-36 h-36 border-2 border-white opacity-20 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Loading;
