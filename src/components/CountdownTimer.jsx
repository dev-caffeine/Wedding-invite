import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

const weddingDate = new Date("2025-05-11T00:16:45");

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
        className="glass-timer-wrapper"
      >
        मंगल परिणय ! 💍✨
      </motion.div>
    );
  }

  // Split countdown parts to apply individual styling
  const countdownParts = [
    { value: timeLeft.days, label: "दिवस" },
    { value: timeLeft.hours, label: "तास" },
    { value: timeLeft.minutes, label: "मिनिटं" },
    { value: timeLeft.seconds, label: "सेकंद" },
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
        विवाहासाठी अवघे{" "}
        {countdownParts[0].value} {countdownParts[0].label}{" "}
        {countdownParts[1].value} {countdownParts[1].label}{" "}
        {countdownParts[2].value} {countdownParts[2].label} आणि{" "}
        {countdownParts[3].value} {countdownParts[3].label} उरले आहेत:
      </motion.h2>

      <motion.div
        className="text-2xl sm:text-3xl font-bold glow-text dark:text-yellow-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        
      </motion.div>
    </motion.div>
  );
}
