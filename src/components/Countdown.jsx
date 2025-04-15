// src/components/Countdown.jsx
import React, { useState, useEffect } from "react";
import "./Countdown.css";

export default function Countdown() {
  const weddingDate = new Date("2025-05-11T00:00:00");
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = weddingDate - now;
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    updateCountdown(); // initial run
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // update every hour
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">
        {daysLeft > 0
          ? `💍 Only ${daysLeft} day${daysLeft > 1 ? "s" : ""} to go!`
          : "🎉 It's Wedding Day!"}
      </h2>
    </div>
  );
}
