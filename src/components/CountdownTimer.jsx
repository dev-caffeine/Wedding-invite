import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

const weddingDate = new Date("2025-05-11T00:00:00");

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = weddingDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-xl font-bold text-green-600 mt-6"
      >
        शुभ विवाह! 💍✨
      </motion.div>
    );
  }

  const timerUnits = [
    { label: "दिवस", value: timeLeft.days },
    { label: "तास", value: timeLeft.hours },
    { label: "मिनिटं", value: timeLeft.minutes },
    { label: "सेकंद", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      className="mt-6 text-center text-yellow-800 dark:text-yellow-100"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <motion.h2
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        विवाहासाठी अवघे दिवस उरले आहेत:
      </motion.h2>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {timerUnits.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2 + index * 0.2,
              type: "spring",
              stiffness: 150,
            }}
            className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col justify-center items-center rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md shadow-xl border-2 border-yellow-400"
          >
            <span className="text-2xl sm:text-3xl font-bold text-yellow-800 dark:text-yellow-100 glow-text">
              {item.value}
            </span>
            <span className="text-sm mt-1 font-medium text-yellow-900 dark:text-yellow-200">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
