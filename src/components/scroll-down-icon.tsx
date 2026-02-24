"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollDownIcon = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  });
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-fit min-h-[50px] p-1 border-2 rounded-full border-gray-500 dark:border-white">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 25], opacity: [1, 0] }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="w-3 h-3 rounded-full bg-gray-500 dark:bg-white"
            />
          </div>
          <span className="text-[10px] text-gray-500 dark:text-white/50 font-mono tracking-widest uppercase">
            scroll down
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollDownIcon;
